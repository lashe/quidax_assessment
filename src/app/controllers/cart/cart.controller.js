const { jsonSuccess } = require("../../../utilities");
const { getCart, addToCart } = require("../../services/cart.service");

let controller = {

    // get all items in a user's cart
    getCart: async (req, res) =>{
        let { user_id } = req.query;
        const cart = await getCart(user_id);
        return jsonSuccess(res, cart, "sucessful", 200);
    },

    // add item to a user's cart
    addToCart: async (req, res) => {
        let { item_count } = req.body;
        const { book_id, user_id } = req.query;
        await addToCart(book_id, user_id, item_count);
        return jsonSuccess(res, null, "Item added to cart");
        
    },

    removeFromCart: async (req, res)=>{}
}

module.exports = controller;