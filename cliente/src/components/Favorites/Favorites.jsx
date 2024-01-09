import { useSelector,useDispatch } from "react-redux";
import { filterCards,orderCards } from "../../redux/actions";
import Card from "../Card/Card"
import styles from './Favorites.module.css';

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    };

    return(
        <div className={styles.favorites}>
        <h1 className={styles.h1}>Favorites 🤩</h1>
        <select onChange={handleOrder} className={styles.select}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} className={styles.select}>
            <option value="AllCharacters">All Characters</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        <div className={styles.container}>
        {myFavorites.map(({name,status,species,gender,image,id}) => {
            return(
                <Card   key={id} 
                    id={id}
                     name={name}
                      status={status}
                      species={species}
                      gender={gender}
                      image={image}
                />
            )
        })}
        </div>
        </div>
    )
};