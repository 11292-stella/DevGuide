import Creazione from "./components/Creazione"
import { Routes, Route } from "react-router-dom"
import Html from "./components/Html"
import Css from "./components/Css"
import Bootstrap from "./components/Bootstrap"
import Javascript from "./components/Javascript"
import React from "./components/React"
import Java from "./components/Java"
import SpringBoot from "./components/SpringBoot"
import AppNavbar from "./components/AppNavbar"
import Esempipronti from "./components/EsempiPronti"
import Home from "./components/Home"

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/creazione" element={<Creazione />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<React />} />
        <Route path="/java" element={<Java />} />
        <Route path="/springboot" element={<SpringBoot />} />
        <Route path="/esempipronti" element={<Esempipronti />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
