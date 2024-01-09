import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters,onClose}) {
   return (
      <div className={styles.container}> 
            {characters.map(({id,name,species,gender,image,status}) => {
               return(
                     <Card 
                     key={id}
                     id={id}
                     name ={name}
                     status ={status}
                     species={species}
                     gender={gender} 
                     image={image}
                     onClose={onClose}
                     />
                     );
            })}
          </div>
          );
}
