import React from "react";
import "./css/About.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ()=>{
    return(
        <div className="About">
            
            <div className="Introduction-container">
                <div className="intro">
                    <h1>Who are we?</h1>
                </div>
                <div className="intro-section">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero facilis provident rerum dolores, ratione debitis quidem quos magni vel dignissimos fuga, sunt sit esse blanditiis placeat ipsa exercitationem. Architecto modi itaque ducimus dolorem ipsa! Cumque veniam adipisci vitae explicabo expedita!</p>
                </div>
                <div className="intro-buttons">
                    <button id ="to-home">Get Started</button>
                    <br></br>
                    <a href="#" id="contact-us">Contact us</a>
                </div>
            </div>

            <div className="about-container">
                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        {/* <img className="briefcase" src={"https://static.vecteezy.com/system/resources/thumbnails/007/636/934/small/suitcase-icon-design-template-free-vector.jpg"} alt="briefcase"></img> */}
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg></span>
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RqyGjGLl-1OuMGTfThwKyU5bEA0gqKwtHA&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>

                <div className="flex-wrap">
                    <div className="image-wrap">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8EgCPtOtWYdgA9BrOG6ah_-QQsIX0tnU2w&usqp=CAU"} alt="Team"></img>
                    </div>
                    <div className="team-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius ullam accusamus veritatis, similique ut pariatur, dolore incidunt non culpa laboriosam itaque saepe praesentium, ratione maiores ducimus nesciunt numquam. Error?</p>

                    </div>
                    <div className="position">
                        <h3>Head of Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About