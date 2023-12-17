const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'AUTH',
        },
        adminID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'AUTH',
        },
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Cart = mongoose.model('cart', cartSchema)