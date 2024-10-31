import { useState } from 'react';
import './App.css';
import {
    Container,
    Typography,
    Grid,
    Card,CardMedia
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Education from './Education';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Work from './Work';
import profile from './myimage0.jpg';
import sql from './Sqllogo.png';
import Paralex from './Paralex.css';
import javascript from './Javascriptlogo.png';
import Mysqllogo from './Mysqllogo.png';
function App() {
    return (
        <Router>
            <Container spacing={2}>
                <Grid container spacing={2} className="parallax-section">
                    <Grid item xs={3} sx={{
                        backgroundColor: "gray",
                        paddingTop: "50px",
                        display: 'flex',          // Use flexbox
                        flexDirection: 'column',  // Align items vertically
                        alignItems: 'center',     // Center items horizontally
                        justifyContent: 'center'
                    }}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={profile}
                                alt="Profile Photo"
                                sx={{
                                    width: "100px",
                                    height: "100px",
                                    paddingTop: "20px", // Top padding for spacing
                                    marginBottom: "20px"
                                }}
                            >
                            </CardMedia>
                            
                        </Card>
                        <Typography variant="h6" sx={{ paddingTop: "50px" }}>I'm Yihunie Mulualem</Typography>
                        <Typography variant="h6">Web Developer</Typography>
                       <Link to="/" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Home
                        </Link>
                        <Link to="/About" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            About
                        </Link>
             
                        <Link to="/Skills" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Skills
                        </Link>
                        <Link to="/education" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Education
                        </Link>
                        <Link to="/Experience" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Experience
                        </Link>
                        <Link to="/work" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Work
                        </Link>
                        <Link to="/Contact" style={{ textDecoration: 'none', color: 'blue', display: 'block', margin: '10px 0' }}>
                            Contact
                        </Link>
                        <Footer />
                    </Grid>
                    <Grid item xs={8} sx={{ background: "none" }} >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Skills" element={<Skills />}/>
                            <Route path="/Education" element={<Education />} />
                            <Route path="/Experience" element={<Experience />} />
                            <Route path="/work" element={<Work/> }/>
                            <Route path="/Contact" element={<Contact /> }/>
                        </Routes>
                    </Grid>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;
