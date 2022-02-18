var models = require("../../../database/models/index");
const { jsonSuccess, jsonFailure } = require("../../../utilities");
const { updateOrCreate } = require("../../helpers/general");
const { getAllBooks, getFeaturedBooks, getBookById, unLikeBook, likeBook, likesCount } = require("../../services/books.service");

let controller = {
    // fetching all books
    getAllBooks: async (req, res) => {
        const { page } = req.query || 1;
        const books = await getAllBooks(page);
        console.log(books)
        return jsonSuccess(res, books, "Successful", 200)

    },

    // fetching featured books
    getFeaturedBooks: async (req, res) => {
        const books = await getFeaturedBooks();
        return jsonSuccess(res, books, "Successful", 200);

    },

    // fetching books by book id
    getBookById: async (req, res) => {
        let { book_id } = req.query;
        const book = await getBookById(book_id);
         return jsonSuccess(res, book, null, 200)
    },

    // liking a particular book by user
    likeBook: async (req, res) => {
        let { user_id } = req.query;
        let { book_id, } = req.params;
        let like = await likeBook(book_id, user_id);
        if(like === true){
            return jsonSuccess(res, null, "book liked", 201);
         }
            return jsonFailure(res, null, "error liking book", 400);
    },

    // unlike a particular book by user
    unLikeBook: async (req, res) => {
        let { user_id } = req.query;
        let { book_id, } = req.params;
       let unlike =  await unLikeBook(book_id, user_id);
       if(unlike === true){
        return jsonSuccess(res, null, "book unliked", 201);
     }
        return jsonFailure(res, null, "error unliking book", 400);
    },

    // get the number of likes for a particular book
    likesCount: async (req, res) => {
        let { book_id } = req.query;
        const count = await likesCount(book_id);
        return jsonSuccess(res, count, null, 200);
    }
}

module.exports = controller;
