var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLList = require('graphql').GraphQLList;
const photoInputObject = require('./photoInputObject').photoInputObject;
var ProductType = require('../../types/product');
var ProductModel = require('../../../models/product');

exports.update = {
    type: ProductType.productType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
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
        return ProductModel.findByIdAndUpdate(
            params.id,
            { $set: params },
            { new: true }
        )
            .catch(err => new Error(err));
    }
}
