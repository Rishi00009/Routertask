import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';


const App = () => {
    return (
      <Router>
        <div style={{ display: "flex", minHeight: "50vh" , alignItems: "flex-start" }}>
          
          
          <nav
            className='navposition'
            
          >
            {/* Navigation Links */}
            <div className="navbar-container" 
            
            >
              {[
                { path: "/", label: "All" },
                { path: "/fullstack", label: "Full Stack Development" },
                { path: "/datascience", label: "Data Science" },
                { path: "/cybersecurity", label: "Cyber Security" },
                { path: "/career", label: "Career" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  style={{
                    display: "block",
                    padding: "15% 0% 15% 5%",
                    margin: "0%",
                    textDecoration: "none",
                    color: "#000",
                    width: "95%",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                  className="nav-bar"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
  
          {/* Content Area */}
          <div >
            <Routes>
              <Route path="/" element={<AllCourses />} />
              <Route path="/fullstack" element={<FullStack />} />
              <Route path="/datascience" element={<DataScience />} />
              <Route path="/cybersecurity" element={<CyberSecurity />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  };
  
  export default App;