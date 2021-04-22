module.exports = {
    db: {
        host: 'localhost',
        name: 'pokemonDB'
    },
    mongoose: {
        options: { 
            useNewUrlParser: true 
        }
    },
    morgan: {
        format: 'dev',
        options: { 
            skip: (req, res) => process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'test' 
        }
    },
    pokemonAPI: {
        path: '/api/pokemon'
    },
    port: 8000,
}
