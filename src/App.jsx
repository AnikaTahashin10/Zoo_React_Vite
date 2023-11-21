//import {useState} from 'react'
import Footer from './Footer';
import Header from './Header';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Home';
// import Animals from './Animals';
// import Birds from './Birds';
// import About from './About';
//import Card from './Card';
// import dogs from './assets/dogs.jpeg'
// import fox from './assets/fox.avif'
import './App.css'


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     element: <About />,
  //     element: <Animals />,
  //     element: <Birds />,
  //   },
  // ]);
  



// const [animals, setAnimal] = useState([
//   {id: 1, image: dogs},
//   {id: 2, image: fox},
// ])

  return (
    <>
    <Header/>
<h1>Animals of the Zoo</h1>
            <Footer/>
            </>

  )
}



export default App;
