import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import "./styles/contacts.scss"

import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/services.scss'



import FooterDown from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <FooterDown/>
    </Router>
  );
}

export default App;
