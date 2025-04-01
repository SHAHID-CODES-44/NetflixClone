import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SetupA from "./components/SetupA";
import SetupB from "./components/SetupB";
import SetupC from "./components/SetupC";
import SetupD from "./components/SetupD";
import SetupE from "./components/SetupE";
import SetupF from "./components/SetupF";
import SetupG from "./components/SetupG";
import SetupH from "./components/SetupH";
import Recovery from './components/Recovery';
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0)
// this code belongs to shahid firozabad
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/SetupA" element={<SetupA />} />
        <Route path="/SetupB" element={<SetupB />} />
        <Route path="/SetupC" element={<SetupC />} />
        <Route path='/SetupD' element={<SetupD />} />
        <Route path="/SetupE" element={<SetupE />} />
        <Route path="/SetupF" element={<SetupF />} />
        <Route path="/SetupG" element={<SetupG />} />
        <Route path="/SetupH" element={<SetupH />} />
        <Route path="/Recovery" element={<Recovery />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
