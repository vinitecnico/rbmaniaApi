const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    featured: {
        type: Boolean
    },
    img: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number
    },
    price: {
        type: Number
    },
    packageContent: {
        type: String
    },
    quantity: {
        type: Number
    },
    reference: {
        type: String
    },
    status: {
        type: Boolean
    },
    photos: [{
        big: {
            type: String
        },
        medium: {
            type: String
        },
        small: {
            type: String
        }
    }]
});
const Model = mongoose.model('Product', productSchema);
module.exports = Model;