import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Top from './pages/Top';
import "./styles/styles.scss"


function App() {
  return (
    <BrowserRouter>
     <div className='app_container'>
      <Top/>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
   </BrowserRouter>
  );
}

export default App
