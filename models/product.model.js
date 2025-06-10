const mongoose = require('mongoose');
//this is the code for product models
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Product name is required'],
    },

    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        default: 0,
    },

    price: {
        type: Numer,
        required: [true, 'Product price is required'],
        default: 0.0,
    },

    image: {
        type: String,
        required: [false, 'Product image is required'],
    },
},
{
    timestamps: true,
}
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
