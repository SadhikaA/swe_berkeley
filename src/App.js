import React from 'react';
import './App.css';

/** Handles navigation between pages by routing paths to new pages */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navbar';
import Footer from './components/footer';

/** Pages */
import Home from './pages/homepage';
import About from './pages/about.js';
import OutreachElem from './pages/outreach_e';
import OutreachMid from './pages/outreach_m';
import OutreachHigh from './pages/outreach_h';
import Corporate from './pages/corporate';
import InvolvedAlumni from './pages/involved_a';
import InvolvedStudent from './pages/involved_s';
import Officers from './pages/officers';

function App() {
return (
    <Router>
    <Navigation />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/outreach_e' element={<OutreachElem/>} />
        <Route path='/outreach_m' element={<OutreachMid/>} />
        <Route path='/outreach_h' element={<OutreachHigh/>} />
        <Route path='/corporate' element={<Corporate/>} />
        <Route path='/involved_a' element={<InvolvedAlumni/>} />
        <Route path='/involved_s' element={<InvolvedStudent/>} />
        <Route path='/officers' element={<Officers/>} />
    </Routes>
    <Footer />
    </Router>
);
}
  
export default App;