import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              console.log(character)
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return( <> {character.name ?  
        (<div>
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <img src={character.image} alt={character.name} />
        </div>) : (<h3>Loading... </h3>)
    }</>
    )
};