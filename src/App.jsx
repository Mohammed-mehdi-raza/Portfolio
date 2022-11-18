import React from "react";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from './components/About/About.jsx';
import Experience from "./components/Experience/Experience.jsx";
import Services from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
//import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return(
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Services/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;