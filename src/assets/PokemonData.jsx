export default function PokemonData(data)
    {
        try{
        const pkmn = data[0];
        const species = data[1];

        const FormattedPokemon = {
            name: pkmn.name,
            dexNumber: `${species.pokedex_numbers[0].entry_number}`,
            sprite:pkmn.sprites.other["official-artwork"].front_default,
            type: GetTypes(),
            height: pkmn.height * 10,
            weight: pkmn.weight * 0.1,
            genus: species.genera[7].genus
        }

        function GetTypes() {
            const typesArr = pkmn.types
            let types = "";
            for (let i = 0; i < typesArr.length; i++)
            {
                types = types + " " + typesArr[i].type.name
            }

            types = types.trim()
            types = types.replace(" ", " · ")
            return types
        }

        // Saves the pokemon by it's id and name in the local storage
        if(localStorage.getItem(FormattedPokemon.name) === null || localStorage.getItem(FormattedPokemon.dexNumber) === null)
            {
              console.log("Saving " + pkmn.name + " to local storage")
              localStorage.setItem(FormattedPokemon.name, JSON.stringify(FormattedPokemon))
              localStorage.setItem(FormattedPokemon.dexNumber, JSON.stringify(FormattedPokemon))
            }

        return FormattedPokemon
    }
    catch (e) {
        console.log(e.message)
    }
    }