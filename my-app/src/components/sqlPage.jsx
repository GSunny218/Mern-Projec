import React from "react";
import "./sqlPage.css";
import { useState } from "react";
import sqlImage from "../assets/sql.png";
import box from "../assets/box-image.png";

const SqlPage = () => {
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
        2: 6, // Lesson 2 has 3 parts
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
                        <h2>What is SQL?</h2>
                        <div><img className="sql-image" src={sqlImage} alt="SQL" /></div>
                        <p>SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. Here are the key points about SQL:</p>
                        <ul>
                            <li>It's the standard language for relational database management systems (RDBMS)</li>
                            <li>Used for storing, manipulating, and retrieving data in databases</li>
                            <li>Helps manage large amounts of data efficiently</li>
                            <li>Supports complex queries and data operations</li>
                            <li>Used by businesses worldwide for data management</li>
                            <li>Essential skill for database administrators and developers</li>
                        </ul>
                        <h2>History of SQL</h2>
                        <p>SQL has a rich history dating back to the 1970s:</p>
                        <ul>
                            <li>1970: Dr. Edgar F. Codd published a paper describing the relational database model</li>
                            <li>1974: IBM developed SEQUEL (Structured English Query Language)</li>
                            <li>1979: Relational Software Inc. (now Oracle) released the first commercial SQL implementation</li>
                            <li>1986: ANSI released the first SQL standard</li>
                            <li>1987: ISO adopted SQL as an international standard</li>
                            <li>1990s: Many vendors released their own SQL implementations</li>
                            <li>Present: SQL remains the standard for database management worldwide</li>
                        </ul>
                        <h3>Why SQL?</h3>
                        <ul>
                            <li>Simple and Easy to Learn: SQL uses English-like syntax making it intuitive</li>
                            <li>Standard Language: Universally accepted for database operations</li>
                            <li>Powerful: Can handle complex data operations efficiently</li>
                            <li>High Demand: Essential skill in data-driven industries</li>
                            <li>Versatile: Works with various database systems like MySQL, PostgreSQL, Oracle</li>
                            <li>Data Security: Provides robust data access control</li>
                            <li>Scalable: Can handle both small and large datasets effectively</li>
                        </ul>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Features of SQL</h2>
                        <h2>Features of SQL</h2>
                        <ul>
                            <li>Data Definition Language (DDL): Create, modify, and delete database structures</li>
                            <li>Data Manipulation Language (DML): Insert, update, delete, and retrieve data</li>
                            <li>Data Control Language (DCL): Control access to database data</li>
                            <li>Transaction Control: Manage database transactions</li>
                            <li>Set Operations: Combine results from multiple queries</li>
                            <li>Joins: Combine data from multiple tables</li>
                            <li>Indexing: Optimize data retrieval performance</li>
                            <li>Views: Create virtual tables for simplified data access</li>
                            <li>Stored Procedures: Store and execute SQL code</li>
                            <li>Triggers: Automatic actions based on database events</li>
                        </ul>
                        <h2>Applications of SQL</h2>
                        <ul>
                            <li>Database Management: Managing and organizing large amounts of data</li>
                            <li>Business Analytics: Analyzing business data for insights and reporting</li>
                            <li>Web Applications: Backend data storage and retrieval</li>
                            <li>Enterprise Systems: ERP and CRM systems</li>
                            <li>Data Warehousing: Storing and managing historical data</li>
                            <li>E-commerce: Managing product catalogs and orders</li>
                            <li>Financial Systems: Transaction processing and record keeping</li>
                            <li>Healthcare: Patient records and medical data management</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>What we going to learn in next lessons</h2>
                        <ul>
                            <li>Basics of SQL</li>
                            <li>Comaparision and Logical Operators</li>
                            <li>Aggregate Functions</li>
                            <li>Joins</li>
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
                        <h2>SELECT Query</h2>
                        <p>SELECT query is use to retrieve data from tables. SELECT is a keyword.</p>
                        <p>Syntax:</p>
                        <p className="syntax">
                            <span className="keyword">SELECT</span> column1, column2, column3, ..... <span className="keyword">FROM</span> TableName 
                        </p>
                        <p>Let's see how it works..</p>
                        <p><strong>Employee Table</strong></p>
                        <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>Sunny</td>
                                <td>IT</td>
                                <td>Chembur</td>
                            </tr>
                            <tr>
                                <td>Jayam</td>
                                <td>BAF</td>
                                <td>Kurla</td>
                            </tr>
                            <tr>
                                <td>Prashant</td>
                                <td>DSDA</td>
                                <td>Tilak Nagar</td>
                            </tr>
                        </table>
                        <p>Query:</p>
                        <pre>
                            <code><span className="keyword">SELECT</span> * <span className="keyword">FROM</span> Employee;</code>
                        </pre>
                        <p>This about query will retrieve data from Employee Table.</p>
                       <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>Sunny</td>
                                <td>IT</td>
                                <td>Chembur</td>
                            </tr>
                            <tr>
                                <td>Jayam</td>
                                <td>BAF</td>
                                <td>Kurla</td>
                            </tr>
                            <tr>
                                <td>Prashant</td>
                                <td>DSDA</td>
                                <td>Tilak Nagar</td>
                            </tr>
                        </table>
                        <p>You can also retrieve a single column from table.</p>
                        <p className="syntax"><span className="keyword">SELECT</span> Name <span className="keyword">FROM</span> Employee;</p>
                        <table className="table">
                            <tr>
                                <th>Name</th>
                            </tr>
                            <tr>
                                <td>Sunny</td>
                            </tr>
                            <tr>
                                <td>Jayam</td>
                            </tr>
                            <tr>
                                <td>Prashant</td>
                            </tr>
                        </table>
                        <p>We can also choose a single row and a column's data by using <strong>WHERE</strong> keyword.</p>
                        <p>Query:</p>
                        <p>
                            <span className="keyword">SELECT</span> Name <span className="keyword">FROM</span> Employee <span className="keyword">WHERE</span> Department=<span className="string-value">"IT"</span>
                        </p>
                        <p>This query gives output as: </p>
                        <table>
                            <tr>
                                <th>Name</th>
                            </tr>
                            <tr>
                                <th>
                                    Sunny
                                </th>
                            </tr>
                        </table>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Update Query</h2>
                        <p>If we want we can update the table by simply entering UPDATE Query</p>
                        <p>Syntax:</p>
                        <p className="syntax">
                            <span className="keyword">UPDATE</span> table_name <span className="keyword">SET</span> column1 = value1, column2 = value2, ... <span className="keyword">WHERE</span> condition;
                        </p>
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

    const sqlLesson1 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Intro to SQL - Get Started</div>
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

    const sqlLesson2 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Basics of SQL</div>
                        <div><ProgressBar1 totalParts={6}/></div>
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

    const sqlLesson3 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Comparision and Logica Operators</div>
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

    const sqlLesson4 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Aggregate Functions</div>
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

    const sqlLesson5 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Joins</div>
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
                return sqlLesson1();
            case 2:
                return sqlLesson2();
            case 3:
                return sqlLesson3();
            case 4:
                return sqlLesson4();
            case 5:
                return sqlLesson5();
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
                                        Intro to SQL - Get Started
                                </div>
                                <div onClick={() => handleLessonClick(2)} 
                                    className={`l2 ${currentLesson === 2 ? 'active' : ''} ${completedLessons.includes(2) ? 'completed' : ''}`}>Basic of SQL</div>
                                <div onClick={() => handleLessonClick(3)} 
                                    className={`l3 ${currentLesson === 3 ? 'active' : ''} ${completedLessons.includes(3) ? 'completed' : ''}`}>Comparison and Logical Opertors</div>
                                <div onClick={() => handleLessonClick(4)} 
                                    className={`l4 ${currentLesson === 4 ? 'active' : ''} ${completedLessons.includes(4) ? 'completed' : ''}`}>Aggregate Fuctions</div>
                                <div onClick={() => handleLessonClick(5)} 
                                    className={`l5 ${currentLesson === 5 ? 'active' : ''} ${completedLessons.includes(5) ? 'completed' : ''}`}>Joins</div>
                            </div>
                            <div className="render-lessons">{renderLessons()}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default SqlPage;