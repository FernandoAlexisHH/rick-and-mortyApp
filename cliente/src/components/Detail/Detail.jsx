import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css";

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

    return( <> 
      {character.name ?  
        (<div className={styles.div}>
        <h1 className={styles.h1}>{character.name}</h1>
        <p className={styles.p}>Status: {character.status}</p>
        <p className={styles.p}>Species: {character.species}</p>
        <p className={styles.p}>Gender: {character.gender}</p>
        <p className={styles.p}>{character.origin.name}</p>
        <img src={character.image} className={styles.image} alt={character.name} />
        </div>) : (<h3>Loading... </h3>)
    }</>
    )
};