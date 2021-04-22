const Pokemon = require('../../../models/pokemon');


/******************************************************************************
 * Helper functions
 *****************************************************************************/

// Returns a Mongoose filter from a req.query object
function getFilterFromQuery(query) {
    // Initialize filter with $and that selects all documents
    const filter = {
        $and: [
            { _id: { $exists: true } }
        ]
    };

    // For each valid query string parameter, add it to the $and filter
    for (const param in query) {

        // Make parameter an array if not already to ensure desired $in behavior
        if (!Array.isArray(query[param])) {
            query[param] = [ query[param] ];
        }

        const condition = {};
        condition[param] = { $in: query[param] };

        filter.$and.push(condition);
    }

    return filter;
}


// Takes a Mongoose property name string and returns the user-friendly version
// e.g. '_id' -> 'id', 'type.1' -> 'type'
function cleanProp(prop) {
    if (prop.includes('id')) {
        prop = 'id';
    }
    else if (prop.includes('type')) {
        prop = 'type';
    }
    else if (prop.includes('weakness')) {
        prop = 'weakness';
    }

    return prop;
}


// Returns a custom error object built from a Mongoose error object
function fromMongooseError(mongooseError) {
    const invalidProps = [];
    for (let prop in mongooseError.errors) {
        invalidProps.push(cleanProp(prop));
    }
    
    return { 
        message: mongooseError._message,
        invalidFields: invalidProps,
    };
}


// Returns an array of valid fields for a Pokemon document submission
function getValidFields() {
    if (!this.validFields) {
        const validFields = Object.keys(Pokemon.schema.paths);
        validFields[validFields.indexOf('_id')] = 'id';
        validFields.splice(validFields.indexOf('__v'), 1);
        this.validFields = validFields;
    }
    return this.validFields;
}


// Returns an array of fields that are invalid for a Pokemon document submission
function getInvalidFields(fields) {
    const invalidFields = [];
    const validFields = getValidFields();

    for (const field of fields) {
        if (!validFields.includes(field)) {
            invalidFields.push(field);
        }
    }

    return invalidFields;
}



/******************************************************************************
 * Handlers
 *****************************************************************************/

// Gets all pokemon if no query string parameters are set,
// or finds only pokemon that satisfy query string parameters.
function findPokemon(req, res) {

    // Get filters from query string
    const filter = getFilterFromQuery(req.query);

    // Find pokemon that match filter
    Pokemon.find(filter, function(error, results) {
        if (error) {
            res.sendStatus(400);
        }
        else if (results.length === 0) {
            const invalidFields = getInvalidFields(Object.keys(req.query));
            if (invalidFields.length > 0) {
                res.status(400).json({
                    message: 'Invalid query field(s)',
                    query: {...req.query},
                    invalidFields,
                });
            }
            else {
                res.status(404).json({ 
                    message: 'No Pokémon found',
                    query: {...req.query},
                });
            }
        }
        else {
            res.status(200).json(results);
        }
    });
}


function getPokemonById(req, res) {
    const id = req.params.id;
    Pokemon.findById(id, function(error, result) {
        if (error) {
            res.status(400).json({ message: `Invalid id value ${id}` });
        }
        else if (!result) {
            res.status(404).json({ message: `No Pokémon found with id ${id}` });
        }
        else {
            res.status(200).json(result);
        }
    });
}


function addPokemon(req, res) {
    const pokemon = new Pokemon({
        _id:        req.body.id,
        name:       req.body.name,
        height:     req.body.height,
        weight:     req.body.weight,
        type:       req.body.type,
        weakness:   req.body.weakness
    });

    pokemon.save(async function(error, result) {
        if (error) {
            existingPokemonWithSameId = await Pokemon.findById(pokemon._id);

            if (existingPokemonWithSameId) {
                res.status(400).json({ 
                    message: `Pokémon with id ${pokemon._id} already exists`,
                    pokemon: existingPokemonWithSameId,
                });
            }
            else {
                res.status(400).json(fromMongooseError(error));
            }
        }
        else {
            res.status(201).json(result);
        }
    });
}


function updatePokemon(req, res) {
    const id = req.params.id;
    Pokemon.updateOne(
        {_id: id}, 
        req.body, 
        { runValidators: true },
        function(error, result) {
            if (error) {
                res.status(400).json(fromMongooseError(error));
            }
            else if (result.n === 0) {
                const invalidFields = getInvalidFields(Object.keys(req.body));
                if (invalidFields.length > 0) {
                    res.status(400).json({
                        message: 'Invalid field(s)',
                        invalidFields,
                    });
                }
                else {
                    res.status(404).json({ message: `No Pokémon found with id ${id}` });
                }
            }
            else {
                res.sendStatus(204);
            }
        }
    );
}


function deletePokemon(req, res) {
    const id = req.params.id;
    Pokemon.deleteOne({_id: id}, function(error, result) {
        if (error) {
            res.status(400).json({ message: `Invalid id value ${id}` });
        }
        else if (result.n === 0) {
            res.status(404).json({ message: `No Pokémon found with id ${id}` });
        }
        else {
            res.sendStatus(204);
        }
    });
}


function getValidTypes(req, res) {
    res.json(require('../../../static_data/validPokemonTypes'));
}


module.exports = {
    findPokemon,
    getPokemonById,
    addPokemon,
    updatePokemon,
    deletePokemon,
    getValidTypes
}
