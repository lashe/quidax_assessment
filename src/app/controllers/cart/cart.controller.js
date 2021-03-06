const { jsonSuccess, jsonFailure } = require("../../../utilities");
const { getCart, addToCart } = require("../../services/cart.service");

let controller = {

    // get all items in a user's cart
    getCart: async (req, res) =>{
        let { user_id } = req.query;
        const cart = await getCart(user_id);
        if (cart){
            return jsonSuccess(res, cart, "sucessful", 200);
        }
        return jsonFailure(res, null, "failed to get cart", 400);
    },

    // add item to a user's cart
    addToCart: async (req, res) => {
        let { item_count } = req.body;
        const { book_id, user_id } = req.query;
        add = await addToCart(book_id, user_id, item_count);
        if(add === true) {
        return jsonSuccess(res, null, "Item added to cart");
        }
        return jsonFailure(res, null, "unable to add item", 400);
    },

    removeFromCart: async (req, res)=>{}
}

module.exports = controller;