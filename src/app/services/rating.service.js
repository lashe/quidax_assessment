var models = require("../../database/models/index");
const { jsonSuccess, jsonFailure } = require("../../utilities");
const { updateOrCreate } = require("../helpers/general");

const getRating = async (book_id) => {
    await models.Books.findOne({where:{uuid: book_id}}).then(async (book)=>{
        if(!book){
            return jsonFailure(res, null, "book does not exist");
        }
        let rating = await models.Ratings.findAll({
            where: { book_id: book_id},
            attributes: [[models.sequelize.fn('avg', models.sequelize.col('stars')),'rating']]
        });
        // let ratings = await models.Ratings.findAndCountAll({where: { book_id: id}});
        // let totalRatings = 0;
        // for (let ra = 0; ra < ratings.length; ra++) {
        //     totalRatings += ratings[ra].stars;
        // }
        // let averageRating = Math.ceil(totalRatings / ratings.count);
        return rating;
    })
}

const rateBook = async (book_id, user_id) => {
    await models.Books.findOne({where: {uuid: book_id}}).then( async (book)=>{
        if (!book){
            return jsonFailure(res, null, "book does not exist");
        }
        await updateOrCreate(
            models.Ratings, 
            {
                book_id: book.uuid,
                user_id: user_id
            },
            {
                star: req.body.star,
                book_id: book.uuid,
                user_id: user_id
            }
            ).then( (updated)=>{
                return true;
            },
            (error)=>{
                return false;
            });
    })
}



module.exports = {
    getRating,
    rateBook
}