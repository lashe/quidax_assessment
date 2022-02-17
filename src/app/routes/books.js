const { BookController } = require("../controllers/books");
const { RatingController } = require("../controllers/ratings");

var book = require("express").Router();
book.get("/all", BookController.getAllBooks);
book.get("/featured", BookController.getFeaturedBooks);
book.get("/", BookController.getBookById);
book.put("/like/:id", BookController.likeBook);
book.get("/likes/:id", BookController.likesCount);
book.put("/unlike/:id", BookController.unLikeBook);
book.put("/rate/:book_id", RatingController.rateBook);
book.get("/rating/:book_id", RatingController.getRatings);
module.exports = book;