import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link, useLocation, NavLink } from 'react-router-dom'; // Import NavLink for active routes
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './Home';
import About from './About';
import Photos from './Photos';
import Education from './Education';
import Hobbies from './Hobbies';
import Aspiration from './Aspiration';
import Contact from './Contact';
import './Home.css';
// BackgroundWrapper Component
const BackgroundWrapper = ({ children }) => {
  const location = useLocation(); // Hook to get the current route path

  // Define background images for specific routes
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/about":
        return "url(/light.gif)"; 
      case "/education":
        return "url(/night.gif)"; // Specific background for education and about pages
      case "/hobbies":
        return "url(/music.gif)";
      case "/photos":
        return "url(/lost.gif)"; // Example GIF background for photos page
      case "/aspiration":
        return "url(/yellow.gif)"; 
      case "/contact":
        return "url(/lost.gif)"; 
      case "/":
        return "url(/scenery.gif)"; // Default for home
      default:
        return "url(/cloud.gif)"; // Default fallback background
    }
  };

  const backgroundStyles = {
    backgroundImage: getBackgroundImage(), // Apply the dynamic background
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100vw",
    paddingTop: "60px", // Keeps space for the fixed navbar
    position: "relative",
  };

  return (
    <div style={backgroundStyles}>
      {children} {/* Render children elements (like the route content) */}
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true,  v7_startTransition: true }}>
      <BackgroundWrapper>
        {/* Navigation Bar */}
        <Navbar bg="violet" variant="violet" fixed="top" expand="lg" className="custom-navbar">
  <Container>
    <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
      Curated Curiosities
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>About</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Education</NavLink>
        <NavLink to="/hobbies" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Hobbies</NavLink>
        <NavLink to="/aspiration" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Aspiration</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Contact</NavLink>
        <NavLink to="/photos" className={({ isActive }) => isActive ? "nav-link-hover active" : "nav-link-hover"}>Photos</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


        {/* Route Configuration */}
        <Routes>
          <Route path="/home" element={
            <div className="main-content">
              <h1 className='page-header'> Welcome To My World!</h1>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/aspiration" element={<Aspiration />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
