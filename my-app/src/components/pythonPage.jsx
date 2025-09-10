import React from "react";
import "./pythonPage.css";
import { useState } from "react";
import pythonImage from "../assets/python.png";
import box from "../assets/box-image.png";

const PythonPage = () => {
    const [completedLessons, setCompletedLessons] = useState([]);
    const [currentPart, setCurrentPart] = useState(1);
    const ProgressBar1 = (props) => {  //ProgressBar for user's progress
        return (
            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{width: `${(currentPart/props.totalParts) * 100}%`}}
                ></div>
            </div>
        );
    };
    const lessonParts = {
        1: 3, // Lesson 1 has 5 parts
        2: 3, // Lesson 2 has 3 parts
        // Add more lessons and their parts as needed
    };
    const handleNextPart = (e) => {
        const totalParts = lessonParts[currentLesson];
        e.preventDefault();
        if (currentPart < totalParts) {
            setCurrentPart(currentPart + 1);
        }
    }
    const handlePrevPart = (e) => {
        e.preventDefault();
        if (currentPart > 1) {
            setCurrentPart(currentPart - 1);
        }
    }

    const renderPart = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>What is Python?</h2>
                        <div><img className="python-image" src={pythonImage} alt="Python" /></div>
                        <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes code readability and a clean syntax, making it an excellent choice for beginners and experienced developers alike.</p>
                        <h3>What Guido van Rossum said, "I want to make a programming language which is easy to learn, build, enchance and use in every feilds of Technology"</h3>
                        <h2>Python was hated!</h2>
                        <p>Earlier, peoples disliked this language. Because, in that era, peoples are learning low-level language like C/C++, Assembly, etc. Python doesn't have semi-colon and easy to write like english.</p>
                        <p>But now, Python is one of the most popular programming languages in the world. It is widely used in various fields such as web development, data analysis, artificial intelligence, scientific computing, automation, and more. Python's versatility and extensive libraries make it a powerful tool for developers.</p>
                        <h2>Why Python?</h2>
                        <p>Python is known for its simplicity and readability, making it an excellent choice for beginners and experienced developers alike.</p>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Features of Python</h2>
                        <ul>
                            <li>Easy to Learn and Use: Python has a simple syntax that is easy to read and write, making it accessible for beginners.</li>
                            <li>Interpreted Language: Python code is executed line by line, which makes debugging easier and allows for rapid development.</li>
                            <li>Cross-Platform: Python is available on various operating systems, including Windows, macOS, and Linux, allowing developers to write code that runs on multiple platforms.</li>
                            <li>Extensive Libraries: Python has a vast standard library and a rich ecosystem of third-party libraries that provide pre-built functionality for various tasks, such as web development, data analysis, machine learning, and more.</li>
                            <li>Object-Oriented Programming: Python supports object-oriented programming (OOP) principles, allowing developers to create reusable and modular code.</li>
                            <li>Community Support: Python has a large and active community of developers who contribute to its growth and provide support through forums, tutorials, and documentation.</li>
                            <li>Versatility: Python can be used for a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, automation, and more.</li>
                        </ul>
                        <h2>Applications of Python</h2>
                        <ul>
                            <li>Web Development: Python is widely used for web development, with popular frameworks like Django and Flask that simplify the process of building web applications.</li>
                            <li>Data Analysis and Visualization: Python has powerful libraries like Pandas, NumPy, and Matplotlib that make it easy to analyze and visualize data.</li>
                            <li>Machine Learning and Artificial Intelligence: Python is a popular choice for machine learning and AI due to libraries like TensorFlow, Keras, and Scikit-learn that provide tools for building and training models.</li>
                            <li>Scientific Computing: Python is used in scientific research for tasks such as simulations, data analysis, and visualization, with libraries like SciPy and SymPy.</li>
                            <li>Automation and Scripting: Python's simplicity and ease of use make it an excellent choice for automating repetitive tasks and writing scripts.</li>
                            <li>Game Development: Python is used in game development with libraries like Pygame that provide tools for creating games.</li>
                            <li>Network Programming: Python has libraries like Socket and Twisted that facilitate network programming and building network applications.</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>What we going to learn in next lessons</h2>
                        <ul>
                            <li>Variables and DataTypes</li>
                            <li>Input and Output</li>
                            <li>Basic Operators</li>
                            <li>Printing</li>
                            <li>Control Flow (if statements, loops)</li>
                            <li>Functions</li>
                            <li><b>And Much More</b></li>
                        </ul>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    const renderPart2 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>What are Variables?</h2>
                        <p>Variables are used to store data values. In Python, you don't need to declare the type of variable explicitly; it is inferred from the value assigned to it.</p>
                        <h3>Syntax for creating Variables</h3>
                        <p className="syntax">variable_name = value</p>
                        <p>Variables are like a box that contains some item.</p>
                        <div><img className="box-image" src={box} alt="box" /></div>
                        <p>Here, 'variable_name' is the name of the variable, and 'value' is the data you want to store in that variable. You can assign different types of values to variables, such as numbers, strings, lists, etc.</p>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Variable Naming Rules</h2>
                        <ul>
                            <li>Variable names must start with a letter (a-z, A-Z) or an underscore (_).</li>
                            <li>Variable names cannot start with a number (0-9).</li>
                            <li>Variable names can only contain letters, numbers, and underscores (a-z, A-Z, 0-9, _).</li>
                            <li>Variable names are case-sensitive (e.g., myVar and myvar are different variables).</li>
                            <li>Variable names cannot be the same as Python reserved keywords (e.g., if, else, while, for, etc.).</li>
                            <li>Use meaningful names that describe the purpose of the variable.</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Writing Variables in python</h2>
                        <p>In Python, we use snake case to define a variable. For example,</p>
                        <p className="syntax">city_name = <span className="string-value">"Mumbai"</span></p>
                        <p>Here 'is equal to' (=) sign is assigning operator</p>
                        <p>Complier automatic assign value to variable by using this sign. Also there are many different operator that we are goning to learn in next coming lessons.</p>
                        <h3>Distinct Variables</h3>
                        <p>In python, you should define distinct variable names to define different values. For example,</p>
                        <p className="syntax">city_name = <span className="string-value">"Mumbai"</span> <br/>
                        city_name = <span className="string-value">"Delhi"</span></p>
                        <p>Here, the second line will overwrite the value of the first line. So, to define different values, you should use distinct variable names like this:</p>
                        <p className="syntax">city_name1 = <span className="string-value">"Mumbai"</span> <br/>
                        city_name2 = <span className="string-value">"Delhi"</span></p>
                        <p>Now, both variables will hold their respective values without overwriting each other.</p>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    const pyLesson1 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Intro to Python - Get Started</div>
                        <div><ProgressBar1 totalParts={3}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart()}</div>
                    <div>
                        <div className='button-container'>
                            {currentPart == 1 ? '':
                                <button onClick={handlePrevPart}>Back</button>
                            }
                            {/*{currentPart < lessonParts[currentLesson] && (              //Mat Dhyan de
                                <button onClick={handleNextPart} className="next-button">Next</button>
                            )}*/}
                            {currentPart < lessonParts[currentLesson] ? 
                                <button onClick={handleNextPart} className="next-button">Next</button> : 
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setCompletedLessons([...completedLessons, currentLesson]);
                                    alert('You have completed this lesson!')
                                }} className="next-button">Finish</button>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const pyLesson2 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Variables</div>
                        <div><ProgressBar1 totalParts={3}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart2()}</div>
                    <div>
                        <div className='button-container'>
                            {currentPart == 1 ? '':
                                <button onClick={handlePrevPart}>Back</button>
                            }
                            {/*{currentPart < lessonParts[currentLesson] && (              //Mat Dhyan de
                                <button onClick={handleNextPart} className="next-button">Next</button>
                            )}*/}
                            {currentPart < lessonParts[currentLesson] ? 
                                <button onClick={handleNextPart} className="next-button">Next</button> : 
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setCompletedLessons([...completedLessons, currentLesson]);
                                    alert('You have completed this lesson!')
                                }} className="next-button">Finish</button>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const [currentLesson, setCurrentLesson] = useState(0);
    const handleLessonClick = (lessonNumber) => {
        setCurrentLesson(lessonNumber);
        setCurrentPart(1); // Reset to first part when a new lesson is selected
    }
    const renderLessons = () => {
        switch (currentLesson) {
            case 1:
                return pyLesson1();
            case 2:
                return pyLesson2();
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    
    return (
        <>
            <div className="python-page-container">
                <div className="python-page">
                    <header className="header-py">
                        <h1>Python</h1>
                    </header>
                    <main>
                        <div className="course-content">
                            <div className="course-title"><span>Lessons</span>
                                <div 
                                    onClick={() => handleLessonClick(1)} 
                                    className={`l1 ${currentLesson === 1 ? 'active' : ''} ${completedLessons.includes(1) ? 'completed' : ''}`}
                                    >
                                        Intro to Python - Get Started
                                </div>
                                <div onClick={() => handleLessonClick(1)} 
                                    className={`l1 ${currentLesson === 1 ? 'active' : ''} ${completedLessons.includes(1) ? 'completed' : ''}`}>Variables</div>
                                <div className="l3">Print Statement and Console</div>
                                <div className="l4">Expressions and Arthimatic Operations</div>
                                <div className="l5">True and False</div>
                                <div className="l6">Comments in Python</div>
                                <div className="l7">Data Types</div>
                                <div className="l8">Taking Input from User</div>
                                <div>Type Conversion</div>
                                <div>Conditional Statements</div>
                                <div>Loops</div>
                                <div>Functions</div>
                                <div>Lists</div>
                            </div>
                            <div className="render-lessons">{renderLessons()}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default PythonPage;