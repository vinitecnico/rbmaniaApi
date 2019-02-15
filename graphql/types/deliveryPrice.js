const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInt = require('graphql').GraphQLInt;

// deliveryPrice Type
exports.deliveryPriceType = new GraphQLObjectType({
    name: 'deliveryPrice',
    fields: () => {
        return {
            Codigo: {
                type: GraphQLInt
            },
            Erro: {
                type: GraphQLString
            },
            MsgErro: {
                type: GraphQLString
            },
            Valor: {
                type: GraphQLString
            },
            ValorAvisoRecebimento: {
                type: GraphQLString
            },
            ValorMaoPropria: {
                type: GraphQLString
            },
            ValorSemAdicionais: {
                type: GraphQLString
            },
            ValorValorDeclarado: {
                type: GraphQLString
            }
        }
    }
});
