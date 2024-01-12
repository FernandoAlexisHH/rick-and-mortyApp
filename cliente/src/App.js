import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import { useEffect, useState } from 'react';
import { Route,Routes,useLocation, useNavigate} from 'react-router-dom';
import styles from './App.module.css'
import axios from 'axios';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Register from './components/Register/Register.jsx';

function App() {
   const [characters,setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access,setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(()=>{
      if(pathname === '/register') return
      !access && navigate("/")
   },[access, navigate])  

   function onSearch(id) {
      if(characters.find((personaje) => personaje.id === id)) return window.alert("Personaje repetido"); 
      else{
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }else {
            window.alert('¡No hay personajes con este ID!');
         }
   }
   )
}
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => Number(char.id) !== Number(id)))
   };

   function login(userData) {
      const { email, password } = userData;
      axios.post('http://localhost:3001/rickandmorty/login/user',{email,password})
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logout = () => {
      navigate("/")
      setAccess(false);
      window.location.reload()
   }

   return (
      <div className='App'>
          {pathname !== '/' && pathname !== '/register' ? <div className={styles.nav}><Nav onSearch={onSearch} logout={logout}/></div>:''}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/register' element={<Register login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
