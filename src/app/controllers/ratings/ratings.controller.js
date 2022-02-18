const { Sequelize } = require("../../../database/models");
var models = require("../../../database/models");
const { jsonSuccess, jsonFailure } = require("../../../utilities");
const { getRating, rateBook } = require("../../services/rating.service");

let controller = {

    // get the average rating for a particular book
    getRatings: async (req, res) =>{
        let { book_id } = req.param;
        const rating = await getRating(book_id);
        return jsonSuccess(res, rating, null, 200);
    },

    // user rating a particular book
    rateBook: async (req, res)=>{
        let { user_id } = req.query;
        let { book_id, } = req.params;
        await rateBook(book_id, user_id);
        return jsonSuccess(res, null, "sucessful", 201)
    }
}

module.exports = controller;