
import './App.css'
import { Routes, Route } from "react-router";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Acceuil';
import Services from './pages/Services';
import Realisation from './pages/ Realisations';
import Contact from './pages/Contact';
import MentionsLegales from './pages/Mentions-legales';

function App() {
  

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<MentionsLegales />} />
      </Routes>
      
    <Footer/>
    </>
  )
}

export default App
