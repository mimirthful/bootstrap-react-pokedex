
export default async function GetPokemon(pokemon) {
    try {
        const pokemondata = await FetchPokemon(pokemon);
        const speciesData = await FetchSpecies(pokemondata.id)

        return [pokemondata, speciesData]
    } catch (e) {
        const error = e;
        return error.message;
      }
    }


    async function FetchPokemon(pokemon)
    {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
        const data = await response.json();
        return data

    }

    async function FetchSpecies(id)
    {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+ id)
        const species = await response.json()
        return species;

    }