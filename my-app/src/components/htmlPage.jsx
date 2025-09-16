import React from "react";
import "./htmlPage.css";
import { useState } from "react";
import box from "../assets/box-image.png";
import htmlImage from "../assets/html-logo.png";
import telescopeImage from "../assets/telescope.png";

const HtmlPage = () => {
    const lessBitwise = "<<";
    const moreBitwise = ">>";
    const lessThan = "<";
    const greaterThan = ">";
    const lessThanEqual = "<=";
    const greaterThanEqual = ">=";
    const slash = "/";

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
        2: 5, // Lesson 2 has 3 parts
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
                        <h2>What is HTML?</h2>
                        <div><img className="html-image" src={htmlImage} alt="HTML" /></div>
                        <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and content of a webpage by using a series of elements and tags. HTML is the backbone of the web, allowing browsers to interpret and display text, images, links, and other multimedia content.</p>

                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Features of HTML</h2>
                        <ul>
                            <li>Easy to Learn and Use: HTML has a simple syntax and is easy to learn, making it accessible for beginners.</li>
                            <li>Platform Independent: HTML can be used on any operating system and is supported by all web browsers.</li>
                            <li>Hyperlinks: HTML allows the creation of hyperlinks, enabling users to navigate between different web pages and websites.</li>
                            <li>Multimedia Support: HTML supports the integration of multimedia elements such as images, audio, and video, enhancing the user experience.</li>
                            <li>Structured Content: HTML provides a way to structure content using headings, paragraphs, lists, and tables, making it easier to read and understand.</li>
                            <li>Extensibility: HTML can be extended with other technologies such as CSS (Cascading Style Sheets) and JavaScript to enhance the appearance and functionality of web pages.</li>
                            <li>Accessibility: HTML supports accessibility features, allowing web content to be accessible to users with disabilities.</li>
                            <li>SEO Friendly: HTML provides tags and attributes that help improve the search engine optimization (SEO) of web pages, making them more discoverable by search engines.</li>
                        </ul>
                        <h2>Applications of HTML</h2>
                        <ul>
                            <li>Web Development: HTML is the foundation of web development, used to create and structure web pages and applications.</li>
                            <li>Email Templates: HTML is used to create visually appealing email templates for marketing and communication purposes.</li>
                            <li>Documentation: HTML is used to create online documentation and help files for software applications.</li>
                            <li>Content Management Systems (CMS): HTML is used in CMS platforms to create and manage web content.</li>
                            <li>Web-based Applications: HTML is used in the development of web-based applications, providing the user interface and structure.</li>
                            <li>Mobile Applications: HTML is used in hybrid mobile applications to create the user interface and structure.</li>
                            <li>Interactive Web Pages: HTML is used in combination with JavaScript to create interactive and dynamic web pages.</li>
                            <li>Learning and Education: HTML is used in educational platforms and online courses to create interactive learning materials.</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>What we going to learn in next lessons</h2>
                        <ul>
                            <li>Basic tags like html, body, p, Heading tags(h1, h2, h3, h4, h5 and h6), etc</li>
                            <li>Intermediate HTML</li>
                            <li>Semantic HTML</li>
                            <li>Advance HTML</li>
                        </ul>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!  <img src={telescopeImage} alt="telescope" /></div>;
        }
    }

    const renderPart2 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>Opening tag and Closing tag</h2>
                        <p>HTML is not syntactical language, it's a <i>Markup Language</i>.</p>
                        <p>Each HTML tag has opening and closing tag, like,</p>
                        <p className="syntax"><span className="less-than-h">{lessThan}</span>tag<span className="greater-than-h">{greaterThan}</span><span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>tag<span className="greater-than-h">{greaterThan}</span></p>
                        <p>Above, it's not a specific tag. it's just a example.</p>
                        <p>Tags like: p, span, div, heading tags, html, body, etc. have opening and closing tags.</p>
                        <h2>Void Tags</h2>
                        <p>HTML also has some special tags which don't have closing tag, such tags are called as <i>Void Tags</i></p>
                        <p>For example:</p>
                        <p><span className="less-than-h">{lessThan}</span>img <span className="slash-h">{slash}</span><span className="greater-than-h">{greaterThan}</span></p>
                        <p>Here, img is void tags.</p>
                        <p>We have many tags like: link, meta, img, source, etc.</p>
                        <p>Please don't be scared! We learn this tags and it's uses in next lessons.</p>
                        <p>We use this tags to make websites and applications on internet.</p>

                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Paragraph Tag: p</h2>
                        <p>In HTML, p stands for paragraph. We simply write any text in tags</p>
                        <div className="syntax"><span className="less-than-h">{lessThan}</span>p<span className="greater-than-h">{greaterThan}</span>Hi, I'm p tag<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>p<span className="greater-than-h">{greaterThan}</span></div>
                        <p>Output:</p>
                        <div className="web-output">Hi, I'm p tag</div>
                        <p>p tags is use for text that give information and anything else. You can write long paragraphs by usinh this p tags</p>
                        <h2>Break tag: br</h2>
                        <p>If developer wants to go on new-line programmatically in HTML, then he can use br tag, i.e., break</p>
                        <div className="syntax"><span className="less-than-h">{lessThan}</span>br <span className="slash-h">{slash}</span><span className="greater-than-h">{greaterThan}</span></div>
                        <p>This break tags is also a void tags. You noticed that it doesn't have closing tag, it closes itself</p>
                        <p>For example:</p>
                        <div className="syntax"><span className="less-than-h">{lessThan}</span>p<span className="greater-than-h">{greaterThan}</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span className="less-than-h">{lessThan}</span>br <span className="slash-h">{slash}</span><span className="greater-than-h">{greaterThan}</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>p<span className="greater-than-h">{greaterThan}</span></div>
                        <p>Output:</p>
                        <div className="web-output">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Headings</h2>
                        <p>In HTML, we have heading tags from h1 to h6. Each heading is has their own size and font-weight</p>
                        <p>Lists of heading tags</p>
                        <ul>
                            <li>h1</li>
                            <li>h2</li>
                            <li>h3</li>
                            <li>h4</li>
                            <li>h5</li>
                            <li>h6</li>
                        </ul>
                        <p>Now let's see how they looks..</p>
                        <div className="web-output headings">
                            <h1 className="h1-show">h1</h1>
                            <h2 className="h2-show">h2</h2>
                            <h3 className="h3-show">h3</h3>
                            <h4 className="h4-show">h4</h4>
                            <h5 className="h5-show">h5</h5>
                            <h6 className="h6-show">h6</h6>
                        </div>
                        <p>Each heading tags have opening and closing tags</p>
                        <p>Just I mentioned earlier, each heading tags have there own size and font-weight. In simple words, bigger the number; smaller the size and font-weight</p>
                        <h2>Emphasis tag</h2>
                        <p>In HTML, if want to give light font-weoght to a word or make them little-bit tilt than we can use this 'em' tag</p>
                        <p><span className="less-than-h">{lessThan}</span>em<span className="greater-than-h">{greaterThan}</span>Content<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>em<span className="greater-than-h">{greaterThan}</span></p>
                        <p>It also having opening and closing tag.It's look like this: </p>
                        <div className="web-output">
                            <em>Content</em>
                        </div>
                        <h2>Strong tag</h2>
                        <p>If we want a text that gives importance and also have bold text weigth, then we can use strong tag</p>
                        <p><span className="less-than-h">{lessThan}</span>strong<span className="greater-than-h">{greaterThan}</span>Content<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>strong<span className="greater-than-h">{greaterThan}</span></p>
                        <p>It also having opening and closing tag.It's look like this: </p>
                        <div className="web-output">
                            <strong>Content</strong>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="lesson-part">
                        <h2>Buttons</h2>
                        <p>In HTML5, we have in-built button tag that help us to use for various purposes. It can be use for submission of form, navigating to other web pages, etc.</p>
                        <p>Button Tag: <span className="less-than-h">{lessThan}</span>button<span className="greater-than-h">{greaterThan}</span>Click me!<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>button<span className="greater-than-h">{greaterThan}</span></p>
                        <div className="web-output">
                            <button className="html-btn">Click me!</button>
                        </div>
                        <p>If you click on it then nothing happens. Because it require some tasks to do.</p>
                        <h2>Links and Attributes</h2>
                        <p>Now we will going to learn HTML's more parts. Each tags have different attributes. This attributes have different purposes. It can be anything.</p>
                        <p>Links are use to navigate from one page to another page. Here we use anchor (a) tag.</p>
                        <p className="syntax"><span className="less-than-h">{lessThan}</span>a href=<span className="string-value">"#"</span><span className="greater-than-h">{greaterThan}</span>Click me!<span className="less-than-h">{lessThan}</span><span className="slash-h">{slash}</span>a<span className="greater-than-h">{greaterThan}</span></p>
                        <div className="web-output"><a href="">Click me!</a></div>
                        <p>This tag has opening and closing tag</p>
                        <p>It also clickable like button, but different then button and has blue font color and has been underlined automatically</p>
                        <p>You already noticed that it has an attribute that called as href (stands for <mark>hypertext resource</mark>)</p>
                        <p>This href attribute take URL (Uniform Resource Locator) that take user to other webpages on internet.</p>
                        <p>But here we given "#" as a value that it never goes anywhere else</p>
                    </div>
                );
            case 5:
                return (
                    <div className="lesson-part">
                        <h2>Image Tag: img</h2>
                        <p>Now we learn how to take an image on webpages. You have seen many websites that have images.</p>
                        <p>Good images have good user interactions. Use loves images</p>
                        <p className="syntax"><span className="less-than-h">{lessThan}</span>img src=<span className="string-value">""</span> <span className="slash-h">{slash}</span><span className="greater-than-h">{greaterThan}</span></p>
                        <p>Image tag has opening and closing tag. It has src attribute (src stands for <mark>source</mark> )</p>
                        <p>src attribute used for giving to image source to webpage.</p>
                        <p className="syntax"><span className="less-than-h">{lessThan}</span>img src=<span className="string-value">"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="</span> alt=<span className="string-value">""</span> <span className="slash-h">{slash}</span><span className="greater-than-h">{greaterThan}</span></p>
                        <div className="web-output">
                            <img width={'250px'} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="nature image" />
                        </div>
                        <p>Here we took this image from internet. Also we can make our own images to fetch on website</p>
                        <p>In image tag, one more attribute 'alt' use to give alternative name to image. 'alt' stands for <mark>Alternative</mark> .</p>
                        <p>If no image provided or unable to load on webpage than this alt attribute envoled. Give a text to image. Like below</p>
                        <div className="web-output">
                            <img src="" alt="Nature Image" />
                        </div>
                    </div>
                );
            default:
                return <div className="select-lesson">Select a lesson to start learning!  <img src={telescopeImage} alt="telescope" /></div>;
        }
    }

    const renderPart3 = () => {
        switch (currentPart) {
            case 1:
                return (
                    <div className="lesson-part">
                        <h2>Input</h2>
                        <p>You had seen many websites takes take user's feedback, some text or input in a box-like container</p>
                        <p>HTML provides us a in-built input tag to take user's input. </p>
                        <p>Tags: <span className="less-than-h">{lessThan}</span>input type=<span className="string-value">""</span> <span className="slash-h">/</span><span className="greater-than-h">{greaterThan}</span></p>
                        <p>Mainly input tags has attribute called 'type'. It takes different values</p>
                        <h2>Type Values</h2>
                        <ul>
                            <li>text: Takes normal text input <div className="web-output"><input className="input-tag-h" type="text" placeholder="Enter text" /></div></li>
                            <li>button: Takes button-like input <div className="web-output"><input className="input-tag-h" type="button" value="button" /></div></li>
                            <li>checkbox: Takes checkbox-like input <div className="web-output"><input className="input-tag-h" type="checkbox" /></div></li>
                            <li>radio: Takes radio-like input <div className="web-output"> Select <input className="input-tag-h" type="radio" /></div></li>
                            <li>color: Takes color-like input <div className="web-output"><input className="input-tag-h" type="color" /></div></li>
                            <li>date: Takes date-like input <div className="web-output"><input className="input-tag-h" type="date" /></div></li>
                            <li>email: Takes email-like input <div className="web-output"><input className="input-tag-h" type="email" /></div></li>
                            <li>file: Takes file-like input <div className="web-output"><input className="input-tag-h" type="file" /></div></li>
                            <li>password: Takes password-like input <div className="web-output"><input className="input-tag-h" type="password" placeholder="Enter password" /></div></li>
                        </ul>
                        <p>These are some commonly used input types. There are many more input types available.</p>
                        <p>A one more commonly used attribute is placeholder in input tag. 'placeholder' basically, give hint to user. Like above:</p>
                        <p>For example: <span className="less-than-h">{lessThan}</span>input type=<span className="string-value">"text"</span> placeholder=<span className="string-value">"Enter text"</span> <span className="slash-h">/</span><span className="greater-than-h">{greaterThan}</span></p>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Containers</h2>
                        <p>We going to learn how to make container that holds many HTML element tags. To make container we simply use <strong>'div'</strong> tag</p>
                        <p>'div' tag are used to group the all elements in it.</p>
                        <p>Tag: <span className="less-than-h">{lessThan}</span>div<span className="greater-than-h">{greaterThan}</span></p>
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

    const htmlLesson1 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Intro to HTML - Get Started</div>
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

    const htmlLesson2 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Basic HTML</div>
                        <div><ProgressBar1 totalParts={5}/></div>
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

    const htmlLesson3 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Intermediate HTML</div>
                        <div><ProgressBar1 totalParts={3}/></div>
                    </div>
                    <hr className="hr-line"/>
                    <div>{renderPart3()}</div>
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

    const htmlLesson4 = () => {
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

    const htmlLesson5 = () => {
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
        );}

    const [currentLesson, setCurrentLesson] = useState(0);
    const handleLessonClick = (lessonNumber) => {
        setCurrentLesson(lessonNumber);
        setCurrentPart(1); // Reset to first part when a new lesson is selected
    }
    const renderLessons = () => {
        switch (currentLesson) {
            case 1:
                return htmlLesson1();
            case 2:
                return htmlLesson2();
            case 3:
                return htmlLesson3();
            case 4:
                return htmlLesson4();
            case 5:
                return htmlLesson5();
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    
    return (
        <>
            <div className="python-page-container">
                <div className="python-page">
                    <header className="header-py">
                        <h1>HTML</h1>
                    </header>
                    <main>
                        <div className="course-content">
                            <div className="course-title"><span>Lessons</span>
                                <div 
                                    onClick={() => handleLessonClick(1)} 
                                    className={`l1 ${currentLesson === 1 ? 'active' : ''} ${completedLessons.includes(1) ? 'completed' : ''}`}
                                    >
                                        Intro to HTML - Get Started
                                </div>
                                <div onClick={() => handleLessonClick(2)} 
                                    className={`l2 ${currentLesson === 2 ? 'active' : ''} ${completedLessons.includes(2) ? 'completed' : ''}`}>Basic HTML</div>
                                <div onClick={() => handleLessonClick(3)} 
                                    className={`l3 ${currentLesson === 3 ? 'active' : ''} ${completedLessons.includes(3) ? 'completed' : ''}`}>Intermediate HTML</div>
                                <div onClick={() => handleLessonClick(4)} 
                                    className={`l4 ${currentLesson === 4 ? 'active' : ''} ${completedLessons.includes(4) ? 'completed' : ''}`}>Semantic HTML</div>
                                <div onClick={() => handleLessonClick(5)} 
                                    className={`l5 ${currentLesson === 5 ? 'active' : ''} ${completedLessons.includes(5) ? 'completed' : ''}`}>Advance HTML - Hidden Tags</div>
                            </div>
                            <div className="render-lessons">{renderLessons()}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default HtmlPage;