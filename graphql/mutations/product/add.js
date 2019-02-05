const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLList = require('graphql').GraphQLList;
const ProductType = require('../../types/product');
const ProductModel = require('../../../models/product');
const photoInputObject = require('./photoInputObject').photoInputObject;

exports.add = {
    type: ProductType.productType,
    args: {
        category: {
            type: new GraphQLNonNull(GraphQLString)
        },
        subCategory: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: GraphQLString
        },
        featured: {
            type: GraphQLBoolean
        },
        img: {
            type: GraphQLString
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        oldPrice: {
            type: GraphQLInt
        },
        price: {
            type: GraphQLInt
        },
        packageContent: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        },
        reference: {
            type: GraphQLString
        },
        status: {
            type: GraphQLBoolean
        },
        photos: {
            type: new GraphQLList(photoInputObject)
        }
    },
    resolve(root, params) {
        const pModel = new ProductModel(params);
        const newProduct = pModel.save();
        if (!newProduct) {
            throw new Error('Error');
        }
        return newProduct;
    }
}