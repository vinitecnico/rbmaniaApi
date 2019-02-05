const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLList = require('graphql').GraphQLList;

const photos = new GraphQLObjectType({
    name: 'photos',
    fields: () => {
        return {
            big: {
                type: GraphQLString
            },
            medium: {
                type: GraphQLString
            },
            small: {
                type: GraphQLString
            }
        }
    }
});

// product Type
exports.productType = new GraphQLObjectType({
    name: 'product',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
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
                type: new GraphQLList(photos)
            }
        }
    }
});
