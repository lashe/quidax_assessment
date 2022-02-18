const { CartController } = require("../controllers/cart");


var cart = require("express").Router();
cart.post("/", CartController.addToCart);
cart.get("/", CartController.getCart);
module.exports = cart;