import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards,orderCards } from "../../redux/actions";
import Card from "../Card/Card"

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites)
    const allCharacters = useSelector((state) => state.allCharacters)
    const dispatch = useDispatch();
    const [aux,setAux] = useState(false);

    console.log(myFavorites,allCharacters);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(true)
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    };

    return(
        <>
        <h1>Componente Favorites</h1>
        <select onChange={handleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="AllCharacters">All Characters</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        {myFavorites.map(({name,status,species,gender,origin,image,id}) => {
            return(
                <Card   key={id} 
                    id={id}
                     name={name}
                      status={status}
                      species={species}
                      gender={gender}
                      origin={origin}
                      image={image}
                />
            )
        })}
        </>
    )
};