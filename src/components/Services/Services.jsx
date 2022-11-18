import React from "react";
import "./Services.css";
import {BsPatchCheckFill} from "react-icons/bs";

function Services(){
    return(
        <section id="services">
            <h5>Other Projects I have made</h5>
            <div className="container project__container">
                <div className="project__frontend">
                    <h3>Frontend Development</h3>
                    <div className="project__content">
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Shopping List</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/shopping-list-front">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Dashboard</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/dashboard">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Responsive Web</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/responsive-web">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Search</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/list-of-items">Github</a>
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="project__backend">
                    <h3>Backend Development</h3>
                    <div className="project__content">
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>CRUD API</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/crud-api">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Request Header Parser</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/request-header-parser">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Timestamp Microservice</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/Timestamp-microservice">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Exercise Tracker</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/excercise_tracker">Github</a>
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="project__others">
                    <h3>Other</h3>
                    <div className="project__content">
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Automatic Mailing System</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/Automatic-Mailing-System">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Simple Calculator(Python)</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/Simple_calculator_using_python">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Unit Convertor(Python)</h4>
                                <small className="text-light">
                                    <a href="https://github.com/Mohammed-mehdi-raza/unit_converter_using-python">Github</a>
                                </small>
                            </div>
                        </article>
                        <article className="project__details">
                            <BsPatchCheckFill className="project__details-icon"/>
                            <div>
                                <h4>Smart Blind Stick(IOT)</h4>
                                <small className="text-light">
                                    <a href="http://github.com">Github</a>
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;