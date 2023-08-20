import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/contact';
import Services from './Pages/Services';
import Navbar from './component/navbar';
import Footer from './component/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import StickyDiv from './component/stickyContact';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import "./App.css";
function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
       
        </Routes>

        </Router>
        <Footer/>
    </div>
  );
}

export default App;
