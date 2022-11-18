import React from "react";
import "./About.css";
import ME from "../../assets/me1.png";
import {VscFolderLibrary} from "react-icons/vsc";
import {SiLeetcode} from "react-icons/si";
import {MdWorkOutline} from "react-icons/md";

function About(){
    return (
        <section id="About">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <MdWorkOutline className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2 Internship Done</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>50+ completed</small>
                        </article>
                        <article className="about__card">
                            <SiLeetcode className="about__icon"/>
                            <h5>LeetCode</h5>
                            <small>100+ Problems Solved</small>
                        </article>
                    </div>
                    <p>
                        Passionate and Hardworking computer science and engineering student, particularly skilled 
                        in web development and other CSE fundamentals. Seeking a job opportunity in a competitive 
                        environment that will challenge me to push my boundaries and expand my knowledge in the 
                        field of computer science while allowing me to add value to the dynamics of the company.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;