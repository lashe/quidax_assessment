var models = require("../../../database/models/index");
const { jsonSuccess, jsonFailure } = require("../../../utilities");
const { updateOrCreate } = require("../../helpers/general");
const { Op } = require("sequelize");
const { search } = require("../../services/search.service");

let controller = {
  // search for books with their title, authors, genre or tags
    search: async (req, res) => {
      let query = req.query.query;
        const result = await search(query);
        return jsonSuccess(res, result);
      }
}

module.exports = controller;