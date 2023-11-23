//import {useState} from 'react'
import Footer from './Footer';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Animals from './Animals';
import Birds from './Birds';
import About from './About';
import Card from './Card';
import dogs from './assets/dogs.jpeg'
import fox from './assets/fox.avif'
import './App.css'

function App() {

// const [animals, setAnimal] = useState([
//   {id: 1, image: {dogs}},
//   {id: 2, image: {fox}},
// ])

  return (
    <div className='App'>
    <Header/>
    
    <Routes>
    <Route path= "/home" element = {<Home/>} />
      <Route path= "/about" element = {<About/>} />
      <Route path= "/animals" element = {<Animals/>} />
      <Route path= "/birds" element = {<Birds/>} />

    </Routes>
    <h1>Animals of the Zoo</h1>
    <Card />
            <Footer/>
            </div>

  )
}



export default App;
