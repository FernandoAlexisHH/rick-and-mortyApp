import Card from '../Card/Card';
import {CardsContainer} from './styledComponents';

export default function Cards({characters,onClose}) {
   return (
      <CardsContainer>
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
          </CardsContainer>
          );
}
