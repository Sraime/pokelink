const PokemonModel = require('../../models/pokemon.model')

const PokemonService = {
    getPokemonsByName(name) {
        const filter =  name ? {name_fr: new RegExp('^'+name,'i')} : {}
        return PokemonModel.find(filter, null, {limit: 15});
    },

    getPokemonById(pokemonId) {
        return PokemonModel.findById(pokemonId);
    }
}

module.exports = PokemonService;