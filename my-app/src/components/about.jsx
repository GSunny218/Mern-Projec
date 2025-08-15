import React from "react";
import jayam from "../assets/jayam-pic.jpg"; // Assuming you have an image for the about section
import prashant from "../assets/prashant-pic.jpg"; // Assuming you have an image for the about section
import "./about.css"; // Assuming you have a CSS file for styling

const About = () => {
    return (
        <React.Fragment>
            <header>
                <div className="about-container">
                    <div className="about-header">
                        <div><a className="back-arrow" href="">&larr;Back</a></div>
                        <div className="about-title">About SkillBytes</div>
                    </div>
                    <p className="about-description">
                        SkillBytes is your go-to platform for mastering essential skills in the tech industry. 
                        We provide comprehensive resources and tutorials to help you learn and grow.
                    </p>
                    <h2 className="motive">Our Mission</h2>
                    <p className="mission-description">
                        To empower individuals with the skills they need to succeed in the ever-evolving tech landscape.
                    </p>
                </div>
            </header>
            <main>
                <section className="section-1">
                    
                </section>
                <section className="sectio-2">
                    <div className="dev-2">
                        <div className="circle-2"><img className="jayam-pic" src={jayam} alt="" /></div>
                        <div className="rectangle-2">
                            <h1>Jayam Vishwakarma</h1>
                            <h2>React Developer, Front-End Developer</h2>
                            <p>
                                Jayam Vishakarma is a passionate React developer with a keen interest in building dynamic and responsive web applications. 
                                With a strong foundation in JavaScript and React, Jayam is dedicated to creating user-friendly interfaces and enhancing user experiences.
                            </p>
                            <p>
                                Jayam's expertise lies in developing scalable applications, optimizing performance, and implementing best practices in React development. 
                                With a focus on continuous learning and improvement, Jayam is committed to staying updated with the latest trends and technologies in the React ecosystem.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <div className="dev-2">
                        <div className="circle-3"><img className="prashant-pic" src={prashant} alt="" /></div>
                        <div className="rectangle-3">
                            <h1>Prashant Tiwari</h1>
                            <h2>Backend Developer,  Data-Base Manager</h2>
                            <p>
                                Prashant is a skilled backend developer and database manager with expertise in building robust server-side applications. 
                                With a focus on performance and scalability, Prashant ensures that the backend systems are efficient and reliable, supporting seamless user experiences.
                            </p>
                            <p>
                                Prashant's proficiency in various backend technologies and database management systems allows for the creation of secure and efficient data storage solutions. 
                                With a commitment to best practices in backend development, Prashant plays a crucial role in ensuring the stability and performance of web applications.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section-4"></section>
            </main>
        </React.Fragment>
    );
}
export default About;