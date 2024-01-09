import { useState } from "react";
import validation from "./validations.js";
import styles from './Form.module.css';

export default function Form({login}){
    const [userData,setUserData] = useState({
        email:"",
        password:""
    });
    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData,
            [property]:value
        })
       validation({
        ...userData,
        [property]:value
    },errors,setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault()
        login(userData)

    };
    
    return(
        <form onSubmit={submitHandler} className={styles.form}>
            <img src=".../public/rickandmorty.png" alt="RickandMorty-img" />
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="text" name="email" value={userData.email} className={styles.input} onChange={handleChange}/>
            <p className={styles.errors}>{errors.email}</p>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" name="password" value={userData.password} className={styles.input} onChange={handleChange}/>
            <p className={styles.errors}>{errors.password}</p>
            <button className={styles.button}>Entrar</button>
        </form>
    )
};