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
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            <p className={styles.errors}>{errors.email}</p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            <p className={styles.errors}>{errors.password}</p>
            <button className={styles.button}>Entrar</button>
        </form>
    )
};