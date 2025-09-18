import React from "react";
import jayam from "../assets/jayam-pic.jpg"; // Assuming you have an image for the about section
import prashant from "../assets/prashant-pic.jpg"; // Assuming you have an image for the about section
import sunny from "../assets/sunny-pic.jpg";
import anurudhh from "../assets/anurudhh-pic.jpg";
import "./about.css"; // Assuming you have a CSS file for styling

const About = () => {
    return (
        <>
            <header>
                <div className="about-container">
                    <div className="about-header">
                        <div className="about-title">About SkillBytes</div>
                    </div>
                    <p className="about-description">
                        SkillBytes is your go-to platform for mastering essential skills in the tech industry. 
                        We provide comprehensive resources and tutorials to help you learn and grow.
                    </p>
                    <h2 className="motive">Our Mission</h2>
                    <hr />
                    <p className="mission-description">
                        To empower individuals with the skills they need to succeed in the ever-evolving tech landscape.
                    </p>
                </div>
            </header>
            <main>
                <div className="main-div">
                <section className="section-1">
                    <div className="div-1">
                        <div className="circle-1"><img src={sunny} className="sunny-pic" alt="sunny-pic" /></div>
                        <div className="rectangle-1">
                            <h1>Sunny Gupta</h1>
                            <h2>CEO, Full-Stack Developer, Project Manager</h2>
                            <h3>Role: Node JS</h3>
                            <p className="dev-intro">
                                Sunny Gupta is a skilled Full-Stack Developer and CEO with expertise in Node.js development. As a leader and technical expert, Sunny drives innovation and architectural decisions while maintaining high standards of code quality. With extensive experience in building scalable applications, Sunny combines business acumen with technical prowess to guide the team towards successful project delivery.
                                His deep understanding of both frontend and backend technologies, particularly Node.js, enables comprehensive solutions to complex technical challenges. Sunny is passionate about mentoring team members and fostering a culture of continuous learning and excellence.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="sectio-2">
                    <div className="div-2">
                        <div className="circle-2"><img className="jayam-pic" src={jayam} alt="jayam-pic" /></div>
                        <div className="rectangle-2">
                            <h1>Jayam Vishwakarma</h1>
                            <h2>React Developer, Front-End Developer, Manager</h2>
                            <h3>Role: React</h3>
                            <p className="dev-intro">
                                Jayam Vishakarma is a passionate React developer with a keen interest in building dynamic and responsive web applications. 
                                With a strong foundation in JavaScript and React, Jayam is dedicated to creating user-friendly interfaces and enhancing user experiences.
                             <br />
                                Jayam's expertise lies in developing scalable applications, optimizing performance, and implementing best practices in React development. 
                                With a focus on continuous learning and improvement, Jayam is committed to staying updated with the latest trends and technologies in the React ecosystem.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <div className="div-3">
                        <div className="circle-3"><img className="prashant-pic" src={prashant} alt="prashant-pic" /></div>
                        <div className="rectangle-3">
                            <h1>Prashant Tiwari</h1>
                            <h2>Backend Developer,  Data-Base Manager, Head Director</h2>
                            <h3>Role: Monogo DB</h3>
                            <p className="dev-intro">
                                Prashant Tiwari is a skilled backend developer and database manager with expertise in building robust server-side applications. 
                                With a focus on performance and scalability, Prashant ensures that the backend systems are efficient and reliable, supporting seamless user experiences.
                            <br />
                                Prashant's proficiency in various backend technologies and database management systems allows for the creation of secure and efficient data storage solutions. 
                                With a commitment to best practices in backend development, Prashant plays a crucial role in ensuring the stability and performance of web applications.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="div-4">
                        <div className="circle-4"><img src={anurudhh} className="anurudhh-pic" alt="anurudhh-pic" /></div>
                        <div className="rectangle-4">
                            <h1>Anurudhh Yadav</h1>
                            <h2>Express Developer, Vice-Manager, Software Engineer</h2>
                            <h3>Role: Express JS</h3>
                            <p className="dev-intro">
                                Anurudhh Yadav is a talented Express.js developer and software engineer specializing in building efficient server-side applications. As a Vice-Manager, he brings strong leadership skills and technical expertise to guide development teams. His deep knowledge of Express.js and web development patterns enables the creation of high-performance, maintainable APIs and middleware solutions.

                                With a focus on writing clean, modular code and implementing robust error handling, Anurudhh ensures reliable and secure backend services. His experience in software architecture and system design contributes significantly to the overall success of web applications.
                            </p>
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </>
    );
}
export default About;