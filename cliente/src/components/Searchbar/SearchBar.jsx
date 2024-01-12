import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value)
   };

   const handleClick = (id) => {
      onSearch(id)
      setId("")
   }
   return (
      <div className={styles.searchbar}>
         <input type='search' placeholder="Search By ID..." className={styles.searchInput} value={id} onChange={(e)=>handleChange(e)}/>
          <button 
          onClick={() => handleClick(id)} className={styles.searchButton}>
            Search
         </button> 
      </div>
   );
}
