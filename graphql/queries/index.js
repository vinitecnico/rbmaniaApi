const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const UserModel = require('../../models/user');
const ProductModel = require('../../models/product');
const userType = require('../types/user').userType;
const productType = require('../types/product').productType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: () => {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        },
      },
      products: {
        type: new GraphQLList(productType),
        resolve: () => {
          const products = ProductModel.find().exec()
          if (!products) {
            throw new Error('Error')
          }
          return products
        }
      }
    }
  }
});