import React from "react";
import "./Footer.css";
import {IoLogoElectron} from "react-icons/io5";

function Footer(){
    return(
        <footer>
            <a href="#" className="footer__logo"><IoLogoElectron/></a>
            <ul className="permalinks">
                <li><a href="#home">HOME</a></li>
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#portfolio">PROJECTS</a></li>
                <li><a href="#services">SERVICES</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="footer__copyright">
                <small>&copy; ALL RIGHTS RESERVED</small>
            </div>
        </footer>
    );
}

export default Footer;