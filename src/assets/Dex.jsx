import { useEffect, useState } from "react";
import GetPokemon from "./GetPokemon";
import DataContainer from "./DataCardGrid";
import PokemonData from "./PokemonData";
import ErrorDisplay from "./ErrorDisplay";

export default function Dex({request}) {

    //states for error and pokemon's data
    const [pokemon, setPokemon] = useState(null);
    const [errorText, setError] = useState(null);
    const [isEmpty, setEmpty] = useState(true);

    //updates this when request prop changes
    useEffect(() => {
      if (!request || request.length === 0) 
      {
        setPokemon(null);
        setError(null);
        setEmpty(true)
        return;}
      
      if (localStorage.getItem(request) === null) // if not in storage
      {
        GetPokemon(request) // get from API
        .then((response) => {
          if(typeof response === "string") //if error string
          {
            console.log("API returned an error")
            setError(response)
            setPokemon(null)
            setEmpty(false)
          } else {
            console.log("API returned a pokemon")
            setPokemon(PokemonData(response))
            setError(null)
            setEmpty(false);
            }
          }
        )
        
    } else { // if request found from the storage
      console.log("found " + request + " from local storage")
      const parsedPoke = JSON.parse(localStorage.getItem(request))
      setPokemon(parsedPoke)
      setError(null)
      setEmpty(false);
    }
  
  }, [request]);



    return <> 
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "25vh" }}>
    {isEmpty && <img className="mx-auto d-block" src="src/assets/placeholder.png"/>}
    {errorText && <ErrorDisplay errorText={errorText}/>}
    {pokemon && <DataContainer data={pokemon}/>}
    </div>
    </>


  }
  
