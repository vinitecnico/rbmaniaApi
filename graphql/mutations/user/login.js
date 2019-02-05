var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../../types/user');
var UserModel = require('../../../models/user');

exports.login = {
    type: UserType.userType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        const user = UserModel.findOne({ email: params.email, password: params.password }).exec();
        if (!user) {
            throw new Error('user not found!');
        }
        return user
    }
}