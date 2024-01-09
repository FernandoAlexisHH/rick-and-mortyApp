import SearchBar from "../Searchbar/SearchBar"
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css";

export default function Nav({onSearch,logout}){
    return(
        <>
        <button type="reset" className={styles.logout} onClick={logout}>Logout</button>
        <NavLink to="/about" className={styles.link}><h3>About</h3></NavLink>
        <NavLink to="/home" className={styles.link}><h3>Home</h3></NavLink>
        <NavLink to="/favorites" className={styles.link}><h3>Favorites</h3></NavLink> 
        <SearchBar onSearch={onSearch}/>       
        </>
    )
};