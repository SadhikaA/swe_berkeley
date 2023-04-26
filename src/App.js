import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/homepage';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
    </Routes>
    <Footer />
    </Router>
);
}
  
export default App;