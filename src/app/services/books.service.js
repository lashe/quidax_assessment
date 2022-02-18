var models = require("../../database/models/index");
const { jsonSuccess, jsonFailure } = require("../../utilities");
const { updateOrCreate } = require("../helpers/general");

const getAllBooks = async (page) => {
    const allBooks = await models.Books.findAndCountAll({
        attributes: ["id"]
    })
    const limit = 15;
    let pages = Math.ceil(allBooks.count / limit);
    let offset = limit * (page - 1) || 0;
    const books = await models.Books.findAll({
        limit,
  offset,
  order: [["id", "ASC"]],
  group: ["genre"],
  include: [
    { 
        model: models.Ratings, as: "rating", 
        attributes: [
            [
                models.sequelize.fn('avg', models.sequelize.col('star')),'rating'
            ]
        ] 
    },
    { 
        model: models.Likes, as: "likes", 
        where:{status: 1},
        attributes: [
            [
                models.sequelize.fn('COUNT', models.sequelize.col('status')),'likes'
            ]
        ] 
    },
  ]
    });
    let response = {
        limit,
        page,
        pages,
        offset,
        books,
      };
      console.log(response)
    return response;

}

const getFeaturedBooks = async () =>{
    const limit = 20;
        await models.Books.findAll({
            where:{ tag: "featured"},
            limit
        }).then((books)=>{
            console.log(books)
            return books;
        },
        (error)=>{
            return error;
        });
}

const getBookById = async (book_id) => {
    const book = await models.Books.findOne({ where: { uuid: book_id },
        include: [
                    { 
                        model: models.Ratings, as: "rating", 
                        attributes: [
                            [
                                models.sequelize.fn('avg', models.sequelize.col('star')),'rating'
                            ]
                        ] 
                    },
                    { 
                        model: models.Likes, as: "likes",
                        where:{status: 1},
                        attributes: [
                            [
                                models.sequelize.fn('COUNT', models.sequelize.col('status')),'likes'
                            ]
                        ] 
                    },
                ]
     });
     return book;
}

const likeBook = async (id, user_id) => {
    let book = await models.Books.findOne({where: {uuid: id}});
    if(!book){
       return false
    }
    await updateOrCreate(
        models.Likes, 
        {user_id: user_id, book_id: id}, 
        {user_id: user_id, book_id: id, status: 1}
        ).then( (updated)=>{
            return true;
        },
        (error)=>{
            return false;
        });
}

const unLikeBook = async (id, user_id) => {
    let book = await models.Books.findOne({where: {uuid: id}});
    if(!book){
       return false
    }
    await updateOrCreate(
        models.Likes, 
        {user_id: user_id, book_id: id}, 
        {user_id: user_id, book_id: id, status: 0}
        ).then( (updated)=>{
            return true;
        },
        (error)=>{
            return false;
        });
}

const likesCount = async (book_id) => {
    let likes = await models.Likes.count({ where: {
        book_id: book_id, 
        status: 1 }
    });
    return likes;
}

module.exports = {
    getAllBooks,
    getFeaturedBooks,
    getBookById,
    likeBook,
    unLikeBook,
    likesCount
}