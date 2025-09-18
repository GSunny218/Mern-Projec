import React from "react";
import "./cssPage.css";
import { useState } from "react";
import cssImage from "../assets/css-logo.png";
import box from "../assets/box-image.png";

const CssPage = () => {
    const leftBrace = "{";
    const rightBrace = "}";

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
        4: 3, // Lesson 4 has 3 parts
        5: 5, // Lesson 5 has 5 parts
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
                        <h2>What is CSS?</h2>
                        <div><img className="css-image" src={cssImage} alt="Sql" /></div>
                        <p>CSS stands for Cascading Style Sheet. Popularly used for design websites. CSS uses property and values to give design to HTML elements. Without HTML elements we cannot use CSS styles</p>
                        <p>Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                        <p>CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[4] This separation can improve content accessibility, since the content can be written without concern for its presentation; provide more flexibility and control in the specification of presentation characteristics; 
                            enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.</p>
                        <h2>History and Origin of CSS</h2>
                        <p>CSS was first proposed by Håkon Wium Lie on 10 October 1994. At the time, Lie was working with Tim Berners-Lee at CERN. Several other style sheet languages for the web were proposed around the same time, and discussions on public mailing lists and inside World Wide Web Consortium resulted in the first W3C CSS
                             Recommendation (CSS1) being released in 1996. In particular, a proposal by Bert Bos was influential; he became co-author of CSS1, and is regarded as co-creator of CSS.</p>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Features of CSS</h2>
                        <p>CSS (Cascading Style Sheets) offers a range of features designed to control the presentation and layout of web pages. These features enable developers to create visually appealing and responsive designs.</p>
                        <ul>
                            <li><strong>Separation of Concerns:</strong> CSS allows for the complete separation of content (HTML) from presentation (CSS). This improves code organization, maintainability, and reusability.</li>
                            <li><strong>Styling Properties:</strong> CSS provides a vast array of properties to control various aspects of an element's appearance, such as:
                            <ol>
                                <li><strong>Typography:</strong> font-family, font-size, color, text-align, line-height.</li>
                                <li><strong>Layout and Positioning:</strong> display, position, float, margin, padding, width, height.</li>
                                <li><strong>Visual Effects:</strong> background-color, background-image, border, box-shadow, text-shadow.</li>
                            </ol>
                            </li>
                            <li><strong>Selectors:</strong> CSS utilizes selectors to target specific HTML elements for styling. These include element selectors, class selectors, ID selectors, attribute selectors, and pseudo-classes/elements. CSS utilizes selectors to target specific HTML elements for styling. These include element
                             selectors, class selectors, ID selectors, attribute selectors, and pseudo-classes/elements.</li>
                            <li><strong>Cascading and Specificity:</strong> The "Cascading" in CSS refers to how styles are applied and resolved when multiple rules target the same element. Specificity rules determine which style takes precedence. The "Cascading" in CSS refers to how styles are applied and resolved when multiple rules
                             target the same element. Specificity rules determine which style takes precedence.</li>
                            <li><strong>Box Model:</strong> CSS defines a box model for every HTML element, consisting of content, padding, border, and margin, which helps in understanding and controlling element spacing and layout.</li>
                            <li><strong>Responsive Design:</strong> CSS features like media queries enable the creation of responsive designs that adapt to different screen sizes and devices, providing an optimal viewing experience.</li>
                        </ul>
                        <h2>Applications of CSS</h2>
                        <ul>
                            <li>Defining Fonts and Text: CSS controls font families, sizes, colors, weights, line heights, and text decorations (e.g., underlines, strikethroughs).</li>
                            <li>Colors and Backgrounds: It sets background colors, background images, and text colors for various elements.</li>
                            <li>Layout and Positioning: CSS enables the creation of different page layouts (e.g., single-column, multi-column, grid layouts), and controls the positioning of elements on the page (e.g., absolute, relative, fixed positioning).</li>
                            <li>Spacing and Margins: It defines the spacing between elements and their content using properties like margin and padding.</li>
                            <li>Borders and Decorations: CSS allows for the creation of borders around elements, and other visual decorations like shadows and rounded corners.</li>
                            <li>Reduced Code Duplication: Instead of applying styles inline within HTML, CSS allows for defining styles once and applying them to multiple elements or pages, reducing code repetition.</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>What we going to learn in next lessons</h2>
                        <ul>
                            <li>Basics of CSS</li>
                            <li>Linking with HTML</li>
                            <li>HTML Accessibility</li>
                            <li>Deep Dive in CSS</li>
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
                        <h2>What selectors?</h2>
                        <p>CSS selectors are patterns that allow you to select and style HTML elements on a webpage.</p>
            
            <h3>Basic Types of Selectors:</h3>
            <ul>
                <li><code>element</code> - Selects all elements of that type (e.g., <code>p</code> selects all paragraphs)</li>
                <li><code>.class</code> - Selects elements with a specific class (e.g., <code>.header</code>)</li>
                <li><code>#id</code> - Selects an element with a specific ID (e.g., <code>#main-content</code>)</li>
                <li><code>*</code> - Universal selector that selects all elements</li>
            </ul>

            <h3>Examples:</h3>
            <pre>
                <code className="syntax">
                    p <span>{leftBrace}</span>color: blue;<span>{rightBrace}</span>         
                    <p>.highlight {"color: yellow;"}</p>
                    #header {"color: black;"} 
                </code>
            </pre>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Properties and Values in CSS</h2>
                        <p>CSS properties and values are used to define styles for HTML elements. Each property has specific values that control different aspects of an element's appearance.</p>

                        <h3>Basic Syntax:</h3>
                        <pre>
                            <code className="syntax">
                                selector {leftBrace} 
                                    property: value; 
                                {rightBrace}
                            </code>
                        </pre>

                        <h3>Common Properties:</h3>
                        <ul>
                            <li><code>color</code> - Sets text color (e.g., <code>color: blue;</code>)</li>
                            <li><code>background-color</code> - Sets background color</li>
                            <li><code>font-size</code> - Sets text size (e.g., <code>font-size: 16px;</code>)</li>
                            <li><code>margin</code> - Sets outer spacing</li>
                            <li><code>padding</code> - Sets inner spacing</li>
                            <li><code>border</code> - Sets element borders</li>
                        </ul>

                        <p>Example:</p>
                        <pre>
                            <code className="syntax">
                                p {leftBrace}
                                    color: blue;
                                    font-size: 16px;
                                    margin: 10px;
                                    padding: 5px;
                                    border: 1px solid black;
                                {rightBrace}
                            </code>
                        </pre>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>List of CSS Properties and their Values</h2>
                        <div>
                            <h3>Text Properties:</h3>
                            <ul>
                                <li><code>color</code>: red, #FF0000, rgb(255,0,0)</li>
                                <li><code>font-family</code>: Arial, "Times New Roman", sans-serif</li>
                                <li><code>font-size</code>: 16px, 1em, 100%</li>
                                <li><code>font-weight</code>: normal, bold, 700</li>
                                <li><code>text-align</code>: left, right, center, justify</li>
                            </ul>

                            <h3>Box Model Properties:</h3>
                            <ul>
                                <li><code>margin</code>: 10px, 1em, auto</li>
                                <li><code>padding</code>: 5px, 1em</li>
                                <li><code>border</code>: 1px solid black</li>
                                <li><code>width</code>: 100px, 50%</li>
                                <li><code>height</code>: 100px, auto</li>
                            </ul>

                            <h3>Background Properties:</h3>
                            <ul>
                                <li><code>background-color</code>: white, #FFFFFF</li>
                                <li><code>background-image</code>: url("image.jpg")</li>
                                <li><code>background-repeat</code>: repeat, no-repeat</li>
                                <li><code>background-position</code>: center, top left</li>
                            </ul>

                            <h3>Display and Position:</h3>
                            <ul>
                                <li><code>display</code>: block, inline, flex, grid</li>
                                <li><code>position</code>: static, relative, absolute</li>
                                <li><code>z-index</code>: 1, 999</li>
                                <li><code>float</code>: left, right, none</li>
                            </ul>
                        </div>
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
                        <h2>Inline CSS</h2>
                        <div>
                            <h3>What is Inline CSS?</h3>
                            <p>Inline CSS is used to apply CSS styles directly to individual HTML elements using the style attribute.</p>

                            <h3>Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    {'<'}element style=<span className="string-value">{`"property: value;"`}</span>{'>'}
                                </code>
                            </pre>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    {`<p style="color: blue; font-size: 16px;">This is blue text</p>`}
                                </code>
                            </pre>

                            <h3>Advantages:</h3>
                            <ul>
                                <li>Quick to implement</li>
                                <li>Highest specificity</li>
                                <li>Useful for testing and prototyping</li>
                            </ul>

                            <h3>Disadvantages:</h3>
                            <ul>
                                <li>Difficult to maintain</li>
                                <li>Code repetition</li>
                                <li>Mixes content with presentation</li>
                                <li>Cannot reuse styles</li>
                            </ul>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Internal CSS</h2>
                        <div>
                            <h3>What is Internal CSS?</h3>
                            <p>Internal CSS (also called embedded CSS) is defined within the style element in the HTML head section.</p>

                            <h3>Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    {`<style>
    selector {
        property: value;
    }
</style>`}
                                </code>
                            </pre>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    {`<style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
            margin-left: 20px;
        }
    </style>`}
                                </code>
                            </pre>

                            <h3>Advantages:</h3>
                            <ul>
                                <li>No need for external files</li>
                                <li>CSS is loaded with HTML file</li>
                                <li>Classes and IDs can be used</li>
                            </ul>

                            <h3>Disadvantages:</h3>
                            <ul>
                                <li>Increases page size</li>
                                <li>Styles cannot be reused across pages</li>
                                <li>Mixing content with presentation</li>
                            </ul>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>External CSS</h2>
                        <div>
                            <h3>What is External CSS?</h3>
                            <p>External CSS involves creating a separate .css file and linking it to your HTML documents. This is the most recommended way to add CSS to websites.</p>

                            <h3>How to Link:</h3>
                            <pre>
                                <code className="syntax">
                                    {`<link rel="stylesheet" href="styles.css">`}
                                </code>
                            </pre>

                            <h3>Example styles.css file:</h3>
                            <pre>
                                <code className="syntax">
                                    {`body {
    background-color: lightblue;
}
h1 {
    color: navy;
    margin-left: 20px;
}`}
                                </code>
                            </pre>

                            <h3>Advantages:</h3>
                            <ul>
                                <li>Separation of concerns</li>
                                <li>Code reusability across pages</li>
                                <li>Easy maintenance</li>
                                <li>Faster page loading (through caching)</li>
                            </ul>

                            <h3>Disadvantages:</h3>
                            <ul>
                                <li>Additional HTTP request</li>
                                <li>File must be loaded before styles apply</li>
                                <li>Path management required</li>
                            </ul>
                        </div>
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
                        <h2>ID Selector</h2>
                        <p>In HTML, we can access html elements by giving them ids by using 'id' attribute in html file</p>
                        <p>We can also access any element by using class and name selectors. We will also learn this later.</p>
                        <div>
                            <h3>What is ID Selector?</h3>
                            <p>An ID selector in CSS uses the hash/pound symbol (#) followed by the ID name to select and style a specific HTML element. IDs must be unique within a page.</p>

                            <h3>Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    #elementId {leftBrace}
                                        property: value;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    #header {leftBrace}
                                        background-color: black;
                                        color: white;
                                        padding: 20px;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>HTML Usage:</h3>
                            <pre>
                                <code className="syntax">
                                    {'<div id="header">This is a header</div>'}
                                </code>
                            </pre>

                            <h3>Key Points:</h3>
                            <ul>
                                <li>ID must be unique in the document</li>
                                <li>Has higher specificity than classes</li>
                                <li>Should be used sparingly</li>
                                <li>Cannot start with numbers</li>
                            </ul>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Class Selector</h2>
                        <div>
                            <h3>What is Class Selector?</h3>
                            <p>A class selector in CSS uses a period (.) followed by the class name to select and style HTML elements that share the same class.</p>

                            <h3>Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    .className {leftBrace}
                                        property: value;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    .highlight {leftBrace}
                                        background-color: yellow;
                                        font-weight: bold;
                                        padding: 5px;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>HTML Usage:</h3>
                            <pre>
                                <code className="syntax">
                                    {'<div class="highlight">Highlighted text</div>'}
                                    {'<p class="highlight">Another highlighted element</p>'}
                                </code>
                            </pre>

                            <h3>Key Points:</h3>
                            <ul>
                                <li>Multiple elements can share the same class</li>
                                <li>Elements can have multiple classes</li>
                                <li>Lower specificity than IDs</li>
                                <li>Most commonly used selector type</li>
                                <li>Names should be descriptive of their purpose</li>
                            </ul>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Name Selectors</h2>
                        <div>
                            <h3>What is Name Selector?</h3>
                            <p>A name selector in CSS uses the element name itself to select and style HTML elements. These are also called element or tag selectors.</p>

                            <h3>Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    elementName {leftBrace}
                                        property: value;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    p {leftBrace}
                                        color: blue;
                                        font-size: 16px;
                                    {rightBrace}

                                    div {leftBrace}
                                        background-color: gray;
                                        padding: 10px;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Key Points:</h3>
                            <ul>
                                <li>Selects all elements of specified type</li>
                                <li>Lowest specificity of all selectors</li>
                                <li>Good for setting default styles</li>
                                <li>Cannot target specific instances</li>
                                <li>Common elements: p, div, span, h1, etc.</li>
                            </ul>
                        </div>
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
                        <h2>Grid</h2>
                        <div>
                            <h3>What is CSS Grid?</h3>
                            <p>CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.</p>

                            <h3>Basic Grid Properties:</h3>
                            <pre>
                                <code className="syntax">
                                    .container {leftBrace}
                                        display: grid;
                                        grid-template-columns: 100px 100px 100px;
                                        grid-template-rows: 50px 50px;
                                        gap: 10px;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Key Concepts:</h3>
                            <ul>
                                <li><strong>Grid Container:</strong> Element with display: grid</li>
                                <li><strong>Grid Items:</strong> Direct children of grid container</li>
                                <li><strong>Grid Lines:</strong> Dividing lines between rows/columns</li>
                                <li><strong>Grid Track:</strong> Space between two grid lines</li>
                                <li><strong>Grid Cell:</strong> Intersection of row and column</li>
                                <li><strong>Grid Area:</strong> Rectangle of cells</li>
                            </ul>

                            <h3>Common Grid Properties:</h3>
                            <ul>
                                <li><code>grid-template-columns</code>: Define column sizes</li>
                                <li><code>grid-template-rows</code>: Define row sizes</li>
                                <li><code>gap</code>: Space between grid items</li>
                                <li><code>grid-column</code>: Item's column position</li>
                                <li><code>grid-row</code>: Item's row position</li>
                            </ul>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="lesson-part">
                        <h2>Flexbox</h2>
                        <div>
                            <h3>What is Flexbox?</h3>
                            <p>Flexbox is a one-dimensional layout system designed to arrange elements in rows or columns. It's ideal for distributing space and aligning items in a container.</p>

                            <h3>Basic Flexbox Properties:</h3>
                            <pre>
                                <code className="syntax">
                                    .container {leftBrace}
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: center;
                                        align-items: center;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Key Concepts:</h3>
                            <ul>
                                <li><strong>Flex Container:</strong> Element with display: flex</li>
                                <li><strong>Flex Items:</strong> Direct children of flex container</li>
                                <li><strong>Main Axis:</strong> Primary axis of layout (horizontal for row)</li>
                                <li><strong>Cross Axis:</strong> Perpendicular to main axis</li>
                            </ul>

                            <h3>Common Flex Properties:</h3>
                            <ul>
                                <li><code>flex-direction</code>: Direction of flex items (row/column/row-reverse/column-reverse)</li>
                                <li><code>justify-content</code>: Alignment along main axis</li>
                                <li><code>align-items</code>: Alignment along cross axis</li>
                                <li><code>flex-wrap</code>: Controls wrapping of items</li>
                                <li><code>flex-grow</code>: Item's ability to grow</li>
                                <li><code>flex-shrink</code>: Item's ability to shrink</li>
                            </ul>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="lesson-part">
                        <h2>Media Query</h2>
                        <div>
                            <h3>What is Media Query?</h3>
                            <p>Media queries allow you to apply CSS styles depending on a device's general type or specific characteristics like screen resolution or viewport width.</p>

                            <h3>Basic Syntax:</h3>
                            <pre>
                                <code className="syntax">
                                    @media screen and (max-width: 768px) {leftBrace}
                                        /* CSS rules for screens {'<'}= 768px */
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Common Media Query Examples:</h3>
                            <pre>
                                <code className="syntax">
                                    /* Mobile devices */
                                    @media (max-width: 480px) {leftBrace}
                                        .container {leftBrace}
                                            width: 100%;
                                            padding: 10px;
                                        {rightBrace}
                                    {rightBrace}

                                    /* Tablets */
                                    @media (min-width: 481px) and (max-width: 768px) {leftBrace}
                                        .container {leftBrace}
                                            width: 80%;
                                            margin: auto;
                                        {rightBrace}
                                    {rightBrace}

                                    /* Desktop */
                                    @media (min-width: 769px) {leftBrace}
                                        .container {leftBrace}
                                            width: 60%;
                                            max-width: 1200px;
                                        {rightBrace}
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Key Features:</h3>
                            <ul>
                                <li><strong>Breakpoints:</strong> Width thresholds where layout changes</li>
                                <li><strong>Media Types:</strong> screen, print, all</li>
                                <li><strong>Features:</strong> width, height, orientation, resolution</li>
                                <li><strong>Operators:</strong> and, or, not</li>
                            </ul>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="lesson-part">
                        <h2>Box Model</h2>
                        <div>
                            <h3>What is the Box Model?</h3>
                            <p>The CSS box model is the fundamental concept that describes how elements are structured and sized in CSS. Every element is treated as a rectangular box with content, padding, border, and margin areas.</p>

                            <div style={{textAlign: 'center', margin: '20px'}}>
                                <img src={box} alt="CSS Box Model" style={{maxWidth: '400px'}} />
                            </div>

                            <h3>Box Model Components:</h3>
                            <ul>
                                <li><strong>Content:</strong> The actual content of the element (text, images, etc.)</li>
                                <li><strong>Padding:</strong> Clear space around the content, inside the border</li>
                                <li><strong>Border:</strong> A line that goes around the padding</li>
                                <li><strong>Margin:</strong> Clear space outside the border</li>
                            </ul>

                            <h3>Example:</h3>
                            <pre>
                                <code className="syntax">
                                    .box {leftBrace}
                                        /* Content */
                                        width: 200px;
                                        height: 100px;
                                        
                                        /* Padding */
                                        padding: 20px;
                                        
                                        /* Border */
                                        border: 2px solid black;
                                        
                                        /* Margin */
                                        margin: 10px;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Box Sizing:</h3>
                            <ul>
                                <li><strong>content-box:</strong> Default. Width and height only include content</li>
                                <li><strong>border-box:</strong> Width and height include content, padding, and border</li>
                            </ul>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="lesson-part">
                        <h2>Pseudo-classes</h2>
                        <div>
                            <h3>What are Pseudo-classes?</h3>
                            <p>Pseudo-classes define a special state of an element. They allow you to style elements based on their state or position.</p>
                            <p>Using Pseudo-classes we even make a miniture changes on websites. It's helps developers to develop A++ Graded Websites</p>
                            <h3>Common Pseudo-classes:</h3>
                            <pre>
                                <code className="syntax">
                                    /* Mouse hover */
                                    .button:hover {leftBrace}
                                        background-color: blue;
                                    {rightBrace}

                                    /* During click */
                                    .button:active {leftBrace}
                                        background-color: darkblue;
                                    {rightBrace}

                                    /* Visited links */
                                    a:visited {leftBrace}
                                        color: purple;
                                    {rightBrace}

                                    /* First child */
                                    li:first-child {leftBrace}
                                        font-weight: bold;
                                    {rightBrace}
                                </code>
                            </pre>

                            <h3>Popular Pseudo-classes:</h3>
                            <ul>
                                <li><code>:hover</code> - Mouse over element</li>
                                <li><code>:active</code> - Element being clicked</li>
                                <li><code>:focus</code> - Element has focus</li>
                                <li><code>:first-child</code> - First element of its type</li>
                                <li><code>:last-child</code> - Last element of its type</li>
                                <li><code>:nth-child(n)</code> - Element matching position</li>
                                <li><code>:checked</code> - Checked inputs</li>
                                <li><code>:disabled</code> - Disabled elements</li>
                            </ul>
                        </div>
                    </div>
                );
        }
    }

    const cssLesson1 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Intro to CSS - Get Started</div>
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

    const cssLesson2 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Basic CSS</div>
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

    const cssLesson3 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Linking with HTML</div>
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

    const cssLesson4 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">HTML Accessibility</div>
                        <div><ProgressBar1 totalParts={3}/></div>
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

    const cssLesson5 = () => {
        return (
            <>
                <div className="lesson-content">
                    <div>
                        <div className="lesson-name">Deep Dive in CSS</div>
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
                return cssLesson1();
            case 2:
                return cssLesson2();
            case 3:
                return cssLesson3();
            case 4:
                return cssLesson4();
            case 5:
                return cssLesson5();
            default:
                return <div className="select-lesson">Select a lesson to start learning!</div>;
        }
    }

    
    return (
        <>
            <div className="python-page-container">
                <div className="python-page">
                    <header className="header-py">
                        <h1>CSS</h1>
                    </header>
                    <main>
                        <div className="course-content">
                            <div className="course-title"><span>Lessons</span>
                                <div 
                                    onClick={() => handleLessonClick(1)} 
                                    className={`l1 ${currentLesson === 1 ? 'active' : ''} ${completedLessons.includes(1) ? 'completed' : ''}`}
                                    >
                                        Intro to CSS - Get Started
                                </div>
                                <div onClick={() => handleLessonClick(2)} 
                                    className={`l2 ${currentLesson === 2 ? 'active' : ''} ${completedLessons.includes(2) ? 'completed' : ''}`}>Basic CSS</div>
                                <div onClick={() => handleLessonClick(3)} 
                                    className={`l3 ${currentLesson === 3 ? 'active' : ''} ${completedLessons.includes(3) ? 'completed' : ''}`}>Linking with HTML</div>
                                <div onClick={() => handleLessonClick(4)} 
                                    className={`l4 ${currentLesson === 4 ? 'active' : ''} ${completedLessons.includes(4) ? 'completed' : ''}`}>HTML Accessibility</div>
                                <div onClick={() => handleLessonClick(5)} 
                                    className={`l5 ${currentLesson === 5 ? 'active' : ''} ${completedLessons.includes(5) ? 'completed' : ''}`}>Deep Dive in CSS</div>
                            </div>
                            <div className="render-lessons">{renderLessons()}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default CssPage;