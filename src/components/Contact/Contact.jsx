import React, { useRef } from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact(){

    const Form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zvcopmn', 'template_qm7sgwp', Form.current, 'ZeVDifO_7UWs00OBv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>mehdirazajafri2040@gmail.com</h5>
                        <a href="mailto:mehdirazajafri2040@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="https://api.whatsapp.com/send?phone=919307455853" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={Form} onSubmit={sendEmail} >
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email Address" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send A Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;