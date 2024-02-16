import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
//import CategoryPage from "./routes/Category";
import About from "./routes/About";
import animalsData from "./data/animalsData";
import birdsData from "./data/birdsData";
import ErrorPage from "./routes/ErrorPage";
import Animals from "./components/Animals";
import Birds from "./components/Birds";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals title="Animals" data={animalsData} basePath="/animals" />} />
        <Route path="/birds" element={<Birds title="Birds" data={birdsData} basePath="/birds" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      </>
  );
};

export default App;
