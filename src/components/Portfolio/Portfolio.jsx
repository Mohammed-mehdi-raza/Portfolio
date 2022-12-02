import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Memories.png";
import IMG2 from "../../assets/quizmaker.png";
import IMG3 from "../../assets/login.png";
import IMG4 from "../../assets/url shortner.png";
import IMG5 from "../../assets/file metadata.png";
import IMG6 from "../../assets/photoGallery.png";

const data=[
    {
        id:1,
        image:IMG1,
        title:"Memories",
        github:"https://github.com/Mohammed-mehdi-raza/memories-front",
        demo:"https://memories-project-302321.netlify.app"
    },
    {
        id:2,
        image:IMG2,
        title:"QuizMaker",
        github:"https://github.com/Mohammed-mehdi-raza/quizmaker-front",
        demo:"https://cool-frangipane-8ecd98.netlify.app"
    },
    {
        id:3,
        image:IMG3,
        title:"Login Authorization",
        github:"https://github.com/Mohammed-mehdi-raza/login-authorization",
        demo:"https://powerful-island-35627.herokuapp.com/"
    },
    {
        id:4,
        image:IMG4,
        title:"URL Shortner(API)",
        github:"https://github.com/Mohammed-mehdi-raza/Url_shortner",
        demo:"https://fierce-dawn-06242.herokuapp.com/"
    },
    {
        id:5,
        image:IMG5,
        title:"FileMetaData(API)",
        github:"https://github.com/Mohammed-mehdi-raza/filemetadata",
        demo:"https://pacific-plains-67520.herokuapp.com/"
    },
    {
        id:6,
        image:IMG6,
        title:"Photo Gallery",
        github:"https://github.com/Mohammed-mehdi-raza/photo-gallery",
        demo:"https://gregarious-cendol-de4b72.netlify.app/"
    },
]

function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;