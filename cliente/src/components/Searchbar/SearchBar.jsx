import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value)
   };

   return (
      <div className={styles.bar}>
         <input type='search' className={styles.searchInput} onChange={(e)=>handleChange(e)}/>
          <button 
          onClick={()=>onSearch(id)} className={styles.searchButton}>
            Agregar
         </button> 
      </div>
   );
}
