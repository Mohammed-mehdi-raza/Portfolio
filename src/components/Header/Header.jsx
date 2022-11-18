import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import ME from '../../assets/photo.png';
import HeaderSocials from "./HeaderSocials.jsx";

function Header(){
    return(
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohammed Mehdi Raza Jafri</h1>
                <h5 className="text-light">Student || Full Stack Web Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;