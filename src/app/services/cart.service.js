var models = require("../../database/models/index");
const { jsonFailure } = require("../../utilities");

const getCart = async (user_id) => {
    await models.Cart.findAll({where: {
        user_id: user_id,
        status: 1
    }}).then( async (cart)=>{
        return cart;
    },
    error =>{
        return error;
    })

}

const addToCart = async (book_id, user_id, item_count) =>{
    
        const cartItem = await models.Cart.findOne({where: {
            book_id: book_id,
            user_id: user_id,
            status: 1
        }});
        if (!cartItem){
            await models.Cart.create(
                {
                    book_id: book_id,
                    user_id: user_id,
                    status: 1,
                    item_count: item_count
                }
            ).then( (created)=>{
                return true;
            },
            (error)=>{
                return false;
            });
        }
        const newCount = cartItem.count + item_count;
        await models.Cart.update(
            {item_count: newCount},
            {
                book_id: book.uuid,
                user_id: user_id,
            }).then( (updated)=>{
                return true;
            },
            (error)=>{
                return false;
            }); 
}

module.exports = {
    getCart,
    addToCart
}