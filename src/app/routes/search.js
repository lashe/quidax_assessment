const { SearchController } = require("../controllers/search");

var search = require("express").Router();
search.get("/", SearchController.search);
module.exports = search;