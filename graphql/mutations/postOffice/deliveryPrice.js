const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLString = require('graphql').GraphQLString;
const Correios = require('node-correios');
const DeliveryPriceType = require('../../types/deliveryPrice');
const Q = require('q');


exports.deliveryPrice = {
    type: DeliveryPriceType.deliveryPriceType,
    args: {
        zipcode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        totalPrice: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        correios = new Correios();
        const args = {
            nCdServico: 41106,
            sCepOrigem: '07114390',
            sCepDestino: params.zipcode,
            nVlPeso: 0.3,
            nCdFormato: 1,
            nVlComprimento: 23,
            nVlAltura: 11,
            nVlLargura: 14,
            nVlDiametro: 6,
            nVlValorDeclarado: parseFloat(params.totalPrice)
        };

        return correios.calcPreco(args)
            .then(result => {
                if (result && result.length > 0) {
                    return Q.resolve(result[0]);
                } else {
                    throw "price not found!";
                }
            })
            .catch(error => {
                return Q.reject(error);
            });
    }
}