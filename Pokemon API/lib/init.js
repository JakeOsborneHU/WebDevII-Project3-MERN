// Initializes the database with some data

const Pokemon = require('./models/pokemon');
const initPokemon = require('./static_data/initPokemon');

initDatabase();

async function initDatabase() {
    console.log('Initializing database...');

    // Clear pokemon collection
    await Pokemon.deleteMany({});

    // Insert initial data
    for (const p of initPokemon) {
        const pokemon = new Pokemon(p);
        await pokemon.save();
    }

    console.log('Database initialized.');
    process.exit();
}
