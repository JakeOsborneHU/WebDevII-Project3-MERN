const handlers = require('./handlers');
const router = require('express').Router();

// Register middleware functions for URLs (relative to mount point)
router
    .get('/', handlers.findPokemon)
    .get('/types', handlers.getValidTypes)
    .get('/:id', handlers.getPokemonById)
    .post('/', handlers.addPokemon)
    .put('/:id', handlers.updatePokemon)
    .delete('/:id', handlers.deletePokemon)
;

module.exports = router;
