import React from "react";
import "./css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import 'font-awesome/css/font-awesome.min.css';

const Contact =()=>{
    return(
        <div className="contact" >
            <div className="contact-wrap">
            <div className="intro-to-contact">
                <h1>Get in touch with us!</h1>
                <div className="intro-logo">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />  
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
                </div>
            </div>
            <div className="form-wrap">
                <form className="structure">
                    <div className="name">
                        <label htmlFor="your-name" className="details">Name</label><br></br>
                        <input type="text" placeholder="Your Name"></input>

                    </div>
                    <div className="email">
                        <label htmlFor="your-email" className="details">Email</label><br></br>
                        <input type="text" placeholder="Your Email"></input>
                    </div>
                    <div className="number">
                        <label htmlFor="your-number" className="details">Email</label><br></br>
                        <input type="number" placeholder="Your Phone Number"></input>
                    </div>
                    <div className="message">
                        <label htmlFor="your-message" className="details">Message</label><br></br>
                        <textarea rows = "5" cols = "" name = "description">
                            Your Message
                        </textarea>
                    </div>
                    <div className="submit">
                        <submit>
                            <button>Send Message</button>
                        </submit>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact