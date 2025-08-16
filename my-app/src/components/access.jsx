import React from "react";
import { useEffect, useState } from "react";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png"; 
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import "./access.css"; // Assuming you have a CSS file for styles
const Access = () => {
    const texts = [
        "Learning to code opens up a world of opportunities, allowing you to create, innovate, and solve problems in ways that were previously unimaginable.",
        "Build websites, apps, and software that can impact millions of lives.",
        "Change your career path and enter the tech industry, which is constantly evolving and in high demand.",
        "Challenge yourself with logical thinking and problem-solving skills that coding requires.",
        "Join a community of like-minded individuals who are passionate about technology and innovation.",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 5000); // changes every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const textStyle = {
        backgroundText: texts[currentTextIndex],
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#333",
        textAlign: "center",
        margin: "20px 0",
    };

    /*const backgroundImages = [
    'https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg',
    'https://www.gettingsmart.com/wp-content/uploads/2017/07/Coding-Computer-Science.jpg',
    'https://tse4.mm.bing.net/th/id/OIP.rTY1lrNJB6SlNZh9-AGd0AHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://bing.com/th/id/BCO.9c3d77dd-5ac9-45da-a0a0-3a4084ee91b7.png'
  ];*/

    const backgroundImages = [image1, image2, image3, image4, image5];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '500px',
        padding: '20px',
        borderRadius: '100px',
        border: '2px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 0 20px 450px',
    };


    return (
        <>
            <header className="header">
                <div className="navbar">
                    <h1>Access Your Account</h1>
                    <div>
                        <a href="/">Login</a>
                    </div>
                </div>
            </header>
            <main>
                <div className="image-container">
                    <div style={backgroundStyle}></div>
                </div>
                <div>  
                    <p className="lead" style={textStyle}>
                        {texts[currentTextIndex]}
                    </p>
                </div>
                <div className="button-container">
                    <button className="create-ac">Create New Account</button>
                    <button className="exist-aa">I Already Have An Account</button>
                </div>
            </main>
        </>
    );
}

export default Access;