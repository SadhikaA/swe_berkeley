import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Footer from './components/footer';
import Home from './pages/homepage';
import Corporate from './pages/corporate';
import InvolvedAlumni from './pages/involved_a';
import Navigation from './components/navbar';

function App() {
return (
    <Router>
    <Navigation />
    <Routes>
        <Route exact path='/' component={<Home />} />
        <Route path='/about' component={<About/>} />
        <Route path='/corporate' component={<Corporate/>} />
        <Route path='/involved' component={<InvolvedAlumni/>} />
    </Routes>
    <Footer />
    </Router>
);
}
  
export default App;