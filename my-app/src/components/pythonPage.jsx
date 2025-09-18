import React from "react";
import "./pythonPage.css";
import { useState } from "react";
import pythonImage from "../assets/python.png";
import box from "../assets/box-image.png";

const PythonPage = () => {
    const lessBitwise = "<<";
    const moreBitwise = ">>";
    const lessThan = "<";
    const greaterThan = ">";
    const lessThanEqual = "<=";
    const greaterThanEqual = ">=";

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
        1: 3, // Lesson 1 has 3 parts
        2: 3, // Lesson 2 has 3 parts
        3: 3, // Lesson 3 has 3 parts
        4: 4, // Lesson 4 has 4 parts
        5: 5, // Lesson 5 has 4 parts
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

    const renderPart3 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>What is Print Statement?</h2>
                        <p>The print() function in Python is used to display output on the console or terminal. It can print text, numbers, variables, and other data types. The output is displayed as a string representation of the data.</p>
                        <h3>Syntax of Print Statement</h3>
                        <p className="syntax">print(value1, value2)</p>
                        <p>Here, 'value1, value2, ...' are the values you want to print.</p>
                        <h3>Now here, we will print "Hello, World"</h3>
                        <p>It will print in console when you execute the code.</p>
                        <p className="syntax">print(<span className="string-value">"Hello, World"</span>)</p>
                        <p>Output: Hello, World</p>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Printing Variables</h2>
                        <p>You can also print the value of variables using the print() function. For example,</p>
                        <p className="syntax">city_name = <span className="string-value">"Mumbai"</span> <br/>
                        print(city_name)</p>
                        <p>Output: Mumbai</p>
                        <p>Here, the value of the variable 'city_name' is printed using the print() function.</p>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Multiple Values in Print Statement</h2>
                        <p>You can print multiple values in a single print() statement by separating them with commas. For example,</p>
                        <p className="syntax">city_name = <span className="string-value">"Mumbai"</span> <br/>
                        country_name = <span className="string-value">"India"</span> <br/>
                        print(city_name, country_name)</p>
                        <p>Output: Mumbai India</p>
                        <p>Here, both the values of 'city_name' and 'country_name' are printed in a single line, separated by a space.</p>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    const renderPart4 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>What are Expressions?</h2>
                        <p>In Python, an expression is a combination of values, variables, operators, and function calls that can be evaluated to produce a result. Expressions can be as simple as a single value or variable, or they can be more complex, involving multiple operations and function calls.</p>
                        <h3>Examples of Expressions</h3>
                        <ul>
                            <li>Simple Expression: <span className="syntax">5 + 3</span> (evaluates to 8)</li>
                            <li>Variable Expression: <span className="syntax">x * 2</span> (where x is a variable)</li>
                            <li>Function Call Expression: <span className="syntax">len("Hello")</span> (evaluates to 5)</li>
                            <li>Complex Expression: <span className="syntax">(a + b) / c - d</span> (where a, b, c, and d are variables)</li>
                        </ul>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Arithmetic Operators in Python</h2>
                        <p>Python supports various arithmetic operators that can be used in expressions to perform mathematical operations. Here are some commonly used arithmetic operators:</p>
                        <ul>
                            <li>Addition (+): Adds two values together. Example: <span className="syntax">5 + 3</span> (evaluates to 8)</li>
                            <li>Subtraction (-): Subtracts one value from another. Example: <span className="syntax">10 - 4</span> (evaluates to 6)</li>
                            <li>Multiplication (*): Multiplies two values. Example: <span className="syntax">6 * 7</span> (evaluates to 42)</li>
                            <li>Division (/): Divides one value by another and returns a float. Example: <span className="syntax">15 / 3</span> (evaluates to 5.0)</li>
                            <li>Floor Division (//): Divides one value by another and returns the largest integer less than or equal to the result. Example: <span className="syntax">15 // 4</span> (evaluates to 3)</li>
                            <li>Modulus (%): Returns the remainder of a division operation. Example: <span className="syntax">10 % 3</span> (evaluates to 1)</li>
                            <li>Exponentiation (**): Raises a value to the power of another value. Example: <span className="syntax">2 ** 3</span> (evaluates to 8)</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Let's do some fun with python!</h2>
                        <p>We go to see some python programs.</p>
                        <h4>Of cause, python calculates maths in seconds. It complies your code and give precise output.</h4>
                        <p className="syntax">print(5 + 3)</p>
                        <p>Output: 8</p>
                        <p className="syntax">print(10 - 4)</p>
                        <p>Output: 6</p>
                        <p className="syntax">print(6 * 7)</p>
                        <p>Output: 42</p>
                        <p className="syntax">print(15 / 3)</p>
                        <p>Output: 5.0</p>
                        <p className="syntax">print(15 // 4)</p>
                        <p>Output: 3</p>
                        <p className="syntax">print(10 % 3)</p>
                        <p>Output: 1</p>
                        <p className="syntax">print(2 ** 3)</p>
                        <p>Output: 8</p>
                        <h3>We can write program using complex expression by combining all arthmetic operator in n a single print() function</h3>
                        <p className="syntax">print((5 + 3) * 2 - 4 / 2)</p>
                        <p>Output: 14.0</p>
                        <h3>Here, python first calculate the expression in the parenthesis, then multiplication and division from left to right, and finally subtraction.</h3>
                    </div>
                );
            case 4:
                return (
                    <div className="lesson-part">
                        <h2>Using Variables with arthmetic operation</h2>
                        <p>You can also use variables in expressions with arithmetic operators. For example,</p>
                        <p className="syntax">a = 5 <br/>
                        b = 3 <br/>
                        result = a + b <br/>
                        print(result)</p>
                        <p>Output: 8</p>
                        <p>Here, we simply stored a integer number in variables and then stored in another variable with addition operator</p>
                        <p className="syntax">x = 10 <br/>
                        y = 4 <br/>
                        result = x * y - 2 <br/>
                        print(result)</p>
                        <p>Output: 38</p>
                        <p>Here, we simply stored a integer number in variables and then stored in another variable with multiplication and subtraction operator</p>
                        <h3>In the next lesson, we will learn about "Basic Operators"</h3>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    const renderPart5 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>What are Basic Operators?</h2>
                        <p>In Python, basic operators are symbols or keywords that perform operations on one or more operands (values or variables) to produce a result. These operators can be categorized into several types, including arithmetic operators, comparison operators, logical operators, assignment operators, and more.</p>
                        <h3>Types of Basic Operators</h3>
                        <ul>
                            <li>Arithmetic Operators: Used for mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), and floor division (//).</li>
                            <li>Comparison Operators: Used to compare two values and return a boolean result (True or False). Examples include equal to (==), not equal to (!=), greater than ({greaterThan}), less than ({lessThan}), greater than or equal to ({greaterThanEqual}), and less than or equal to ({lessThanEqual}).</li>
                            <li>Logical Operators: Used to combine multiple boolean expressions. Examples include and, or, and not.</li>
                            <li>Assignment Operators: Used to assign values to variables. Examples include the simple assignment operator (=) and compound assignment operators (+=, -=, *=, /=, etc.).</li>
                            <li>Bitwise Operators: Used to perform bit-level operations on integers. Examples include AND (&), OR (|), XOR (^), NOT (~), left shift ({lessBitwise}), and right shift ({moreBitwise}).</li>
                        </ul>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <p>We already seen Arthmetic operators in our previous lesson.</p>
                        <h3>Comparsion operators</h3>
                        <ul>
                            <li>Equal to (==): Checks if two values are equal. Example: <span className="syntax">5 == 5</span> (evaluates to True)</li>
                            <li>Not equal to (!=): Checks if two values are not equal. Example: <span className="syntax">5 != 3</span> (evaluates to True)</li>
                            <li>Greater than ({greaterThan}): Checks if the left value is greater than the right value. Example: <span className="syntax">7 {greaterThan} 4</span> (evaluates to True)</li>
                            <li>Less than ({lessThan}): Checks if the left value is less than the right value. Example: <span className="syntax">3 {lessThan} 6</span> (evaluates to True)</li>
                            <li>Greater than or equal to ({greaterThanEqual}): Checks if the left value is greater than or equal to the right value. Example: <span className="syntax">5 {greaterThanEqual} 5</span> (evaluates to True)</li>
                            <li>Less than or equal to ({lessThanEqual}): Checks if the left value is less than or equal to the right value. Example: <span className="syntax">4 {lessThanEqual} 6</span> (evaluates to True)</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h3>Logical Operators</h3>
                        <ul>
                            <li>and: Returns True if both operands are True. Example: <span className="syntax">True and False</span> (evaluates to False)</li>
                            <li>or: Returns True if at least one operand is True. Example: <span className="syntax">True or False</span> (evaluates to True)</li>
                            <li>not: Returns the opposite boolean value. Example: <span className="syntax">not True</span> (evaluates to False)</li>
                        </ul>
                    </div>
                );
            case 4:
                return (
                    <div className="lesson-part">
                        <h3>Assignment Operators</h3>
                        <ul>
                            <li>=: Simple assignment operator. Example: <span className="syntax">x = 5</span> (assigns the value 5 to variable x)</li>
                            <li>+=: Adds and assigns the value. Example: <span className="syntax">x += 3</span> (equivalent to x = x + 3)</li>
                            <li>-=: Subtracts and assigns the value. Example: <span className="syntax">x -= 2</span> (equivalent to x = x - 2)</li>
                            <li>*=: Multiplies and assigns the value. Example: <span className="syntax">x *= 4</span> (equivalent to x = x * 4)</li>
                            <li>/=: Divides and assigns the value. Example: <span className="syntax">x /= 2</span> (equivalent to x = x / 2)</li>
                            <li>%=: Modulus and assigns the value. Example: <span className="syntax">x %= 3</span> (equivalent to x = x % 3)</li>
                        </ul>
                    </div>
                );
            case 5:
                return (
                    <div className="lesson-part">
                        <h3>Bitwise Operators in Python</h3>
                        <ul>
                            <li>AND (&): Performs a bitwise AND operation. Example: <span className="syntax">5 & 3</span> (evaluates to 1)</li>
                            <li>OR (|): Performs a bitwise OR operation. Example: <span className="syntax">5 | 3</span> (evaluates to 7)</li>
                            <li>XOR (^): Performs a bitwise XOR operation. Example: <span className="syntax">5 ^ 3</span> (evaluates to 6)</li>
                            <li>NOT (~): Performs a bitwise NOT operation. Example: <span className="syntax">~5</span> (evaluates to -6)</li>
                            <li>Left Shift ({lessBitwise}): Shifts the bits of a number to the left. Example: <span className="syntax">5 {lessBitwise} 1</span> (evaluates to 10)</li>
                            <li>Right Shift ({moreBitwise}): Shifts the bits of a number to the right. Example: <span className="syntax">5 {moreBitwise} 1</span> (evaluates to 2)</li>
                        </ul>
                    </div>
                );
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
                                <button className="back-btn" onClick={handlePrevPart}>Back</button>
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
                                <button className="back-btn" onClick={handlePrevPart}>Back</button>
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

    const pyLesson3 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Print Statement and Console</div>
                        <div><ProgressBar1 totalParts={3}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart3()}</div>
                    <div>
                        <div className='button-container'>
                            {currentPart == 1 ? '':
                                <button className="back-btn" onClick={handlePrevPart}>Back</button>
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

    const pyLesson4 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Expression and Arthmetic operations</div>
                        <div><ProgressBar1 totalParts={4}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart4()}</div>
                    <div>
                        <div className='button-container'>
                            {currentPart == 1 ? '':
                                <button className="back-btn" onClick={handlePrevPart}>Back</button>
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

    const pyLesson5 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Expression and Arthmetic operations</div>
                        <div><ProgressBar1 totalParts={5}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart5()}</div>
                    <div>
                        <div className='button-container'>
                            {currentPart == 1 ? '':
                                <button className="back-btn" onClick={handlePrevPart}>Back</button>
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
        );}

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
            case 3:
                return pyLesson3();
            case 4:
                return pyLesson4();
            case 5:
                return pyLesson5();
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
                                <div onClick={() => handleLessonClick(2)} 
                                    className={`l2 ${currentLesson === 2 ? 'active' : ''} ${completedLessons.includes(2) ? 'completed' : ''}`}>Variables</div>
                                <div onClick={() => handleLessonClick(3)} 
                                    className={`l3 ${currentLesson === 3 ? 'active' : ''} ${completedLessons.includes(3) ? 'completed' : ''}`}>Print Statement and Console</div>
                                <div onClick={() => handleLessonClick(4)} 
                                    className={`l4 ${currentLesson === 4 ? 'active' : ''} ${completedLessons.includes(4) ? 'completed' : ''}`}>Expressions and Arthmetic Operations</div>
                                <div onClick={() => handleLessonClick(5)} 
                                    className={`l5 ${currentLesson === 5 ? 'active' : ''} ${completedLessons.includes(5) ? 'completed' : ''}`}>Basic Operators</div>
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