var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ProductType = require('../../types/product');
var ProductModel = require('../../../models/product');

exports.remove = {
  type: ProductType.productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedProduct = ProductModel.findByIdAndRemove(params.id).exec();
    if (!removedProduct) {
      throw new Error('Error')
    }
    return removedProduct;
  }
}