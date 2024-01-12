import styles from './Register.module.css';
import { useState } from 'react';
import axios from "axios";

export default function Register ({login}){
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });
    const handleChange = (event) => { 
        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData,
            [property]:value
        })
    }
    const handleClick = (e) =>{
        e.preventDefault();
        login(userData)
    }

    return(
        <form className={styles.container}>
            <h1 className={styles.h1}>Register Form</h1>
            <label htmlFor="email" className={styles.label}>Email Address: </label>
            <input type="text" name="email" value={userData.email} id="email" placeholder="Email Address" onChange={handleChange} className={styles.input}/>
            <label htmlFor="password" className={styles.label}>Password: </label>
            <input type="password" name="password" value={userData.password} id="password" placeholder="Password" onChange={handleChange} className={styles.input}/>
            <button type="submit" onClick={(e) => handleClick(e)} className={styles.register}>Send Register</button>
        </form>
    )
}