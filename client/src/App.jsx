import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import NewsLetter from "./Pages/NewsLetter";
import Articles from "./Pages/Articles";




export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/signin" element ={<SignIn />} />
        <Route path="/signup" element ={<SignUp/>} />
        <Route path="/dashboard" element ={<Dashboard />} />
        <Route path="/newsletter" element ={<NewsLetter/>} />
        <Route path="/articles" element ={<Articles/>} />
      </Routes>
    </BrowserRouter>
  );
}
