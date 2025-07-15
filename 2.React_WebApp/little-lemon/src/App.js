import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Specials from "./components/Specials";
import Menu from "./components/Menu";
import OnlineOrdering from "./components/OnlineOrdering";
import Login from "./components/Login";
import ReservationStepOne from './components/ReservationStepOne';
import ReservationStepTwo from './components/ReservationStepTwo';
import ReservationSuccess from './components/ReservationSuccess';

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/onlineordering" element={<OnlineOrdering />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservationstepone" element={<ReservationStepOne />} />
        <Route path="/step-two" element={<ReservationStepTwo />} />
        <Route path="/success" element={<ReservationSuccess />} />  
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;






