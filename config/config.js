module.exports = {
    development: {
        db: 'mongodb://127.0.0.1/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://sa:rbrb2019@ds161295.mlab.com:61295/rbmania',
        app: {
            name: 'rbmania'
        }
    }
};