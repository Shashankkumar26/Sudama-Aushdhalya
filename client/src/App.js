import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';

import Services from './Pages/Services';
import Navbar from './component/navbar';
import Footer from './component/Footer';



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
           
           
          
       
        </Routes>

        </Router>
        <Footer/>
    </div>
  );
}

export default App;
