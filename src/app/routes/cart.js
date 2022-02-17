const { CartController } = require("../controllers/cart");


var cart = require("express").Router();
cart.push("/", CartController.addToCart);
cart.get("/", CartController.getCart);
module.exports = cart;