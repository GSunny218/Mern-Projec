import React from "react";
import "./mainPage.css";
import python from "../assets/python.png";
import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import sql from "../assets/sql.png";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    const pythonCousre = () => {
        navigate('/pythonPage');
    }
    const htmlCourse = () => {
        navigate('/htmlPage');
    }
    const cssCourse = () => {
        navigate('/cssPage');
    }
    const sqlCourse = () => {
        navigate('/sqlPage');
    }

    return(
        <>
            <div>
                <div className="navbar-mp">
                    <div><h1>SkillByte</h1></div>
                    <div className="upper-navbar"><h2>Select Your Programming Language</h2></div>
                    <div className="lower-navbar">
                        <div>Support Our Devs</div>
                        <a href=""><div>&#9881;Setting</div></a>
                        <a href=""><div>About</div></a>
                        <a href=""><div>&#9742;Contact</div></a>
                        <div>&#128100;Profile</div>
                    </div>
                </div>
                <div className="main-body">
                    <div className="courses">Courses</div>
                    <div className="course-list">
                        <div className="course-item">
                            <div onClick={pythonCousre} className="logo-container-mp"><img className="python-logo-mp" src={python} alt="Python Logo" />Python <span className="lang-intro-py">It's fun to learn python because of simple english type Programming language. It's easy to learn</span></div>
                            <div onClick={htmlCourse} className="logo-container-mp"><img className="html-logo-mp" src={html} alt="HML Logo" />HTML <span className="lang-intro-html">HTML is used to make website with uses of tags. Learn to make webs that can change the world</span></div>
                            <div onClick={cssCourse} className="logo-container-mp"><img className="css-logo-mp" src={css} alt="CSS Logo" />CSS <span className="lang-intro-css">If you're creative than you can make web designs perfectly. Make your sites interactive and show creative</span></div>
                            <div onClick={sqlCourse} className="logo-container-mp"><img className="sql-logo-mp" src={sql} alt="SQL Logo" />SQL <span className="lang-intro-sql">Learn about database that how they created, update, retrieve and delete</span></div>
                        </div>
                    </div>
                    <div className="misc-text"><h1>Coding had changed this world, now it's your time to grow-up!</h1></div>
                </div>
                <footer>
                    <div className="footer-mp">
                        <div className="footer-text">
                            <div><h1>Learn, Study, Research and Build</h1></div>
                            <div><h2>Get Your Personalized Certificate of Every Course</h2></div>
                        </div>
                        <div><h6>SkillsByte &#169; 2024 All Rights Reserved</h6></div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default MainPage;