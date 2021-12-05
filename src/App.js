import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Project0 from './components/Project0';
import Project1 from './components/Project1';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/project0" element={<Project0/>}/>
            <Route path="/projects/project1" element={<Project1/>}/>
            <Route path="/contactMe" element={<ContactMe/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
