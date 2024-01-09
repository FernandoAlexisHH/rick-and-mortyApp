import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value)
   };

   return (
      <div className={styles.searchbar}>
         <input type='search' placeholder="Search By ID..." className={styles.searchInput} onChange={(e)=>handleChange(e)}/>
          <button 
          onClick={()=>onSearch(id)} className={styles.searchButton}>
            Search
         </button> 
      </div>
   );
}
