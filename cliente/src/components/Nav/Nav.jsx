import SearchBar from "../Searchbar/SearchBar"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch,logout}){
    return(
        <>
        <SearchBar onSearch={onSearch}/>
        <NavLink to="/about"><h3>About</h3></NavLink>
        <NavLink to="/home"><h3>Home</h3></NavLink>
        <button type="reset" onClick={logout}>Logout</button>
        <NavLink to="/favorites"><h3>Favorites</h3></NavLink>        
        </>
    )
};