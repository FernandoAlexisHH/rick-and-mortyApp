import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addFav,removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



export default function Card({name, status, species, gender,image, onClose,id}) {
   const [isFav,setisFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite =() => {
      if(isFav === true){
         setisFav(false)
         dispatch(removeFav(id))
      }else if(isFav === false){
         setisFav(true)
         dispatch(addFav({name,status,species,gender,image,id}))
      }
   };

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
       <button onClick={() => { dispatch(removeFav(id))
          onClose(id)} } className={style.closeButton}>X</button>
         <img src={image} alt='Imagen de personaje'/>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>

   );
}
