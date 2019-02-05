const GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
const GraphQLString = require('graphql').GraphQLString;

exports.photoInputObject = new GraphQLInputObjectType({
    name: 'photosInput',
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