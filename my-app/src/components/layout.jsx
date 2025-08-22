import React from 'react';
import "./layout.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
    });

    //const totalQuestion = 5;   //Total Questions that 

    const ProgressBar = (props) => {  //ProgressBar for user's progress
        return (
            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{width: `${(currentQuestion/props.totalQuestion) * 100}%`}}
                ></div>
            </div>
        );
    };

    // Add handler for button selection
    const handleSelection = (questionNumber, value) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionNumber]: value
        });
    };

    const handleClick = () => {
        navigate('/login');
    };

    const FirstQuestion = () => {
        return (
            <>
                <form className='div-quest-1'>
                    <div className='question-1'>
                        <h1><span>Q1. </span>Why your want to learn to code?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'>
                            <button type="button" className={`btn-1 ${selectedAnswers[1] === 'for-fun' ? 'selected' : ''}`} onClick={() => handleSelection(1, 'for-fun')}>For Fun <span>&#9996;</span></button>
                        </div>
                        <div className='option-2'>
                            <button type="button" className={`btn-2 ${selectedAnswers[1] === 'pro-dev' ? 'selected' : ''}`}  onClick={() => handleSelection(1, 'pro-dev')}>To become a Professional developer <span>&#128187;</span></button>
                        </div>
                        <div className='option-3'>
                            <button type="button" className={`btn-3 ${selectedAnswers[1] === 'for-job' ? 'selected' : ''}`} onClick={() => handleSelection(1, 'for-job')}>For my Current Job <span>&#128188;</span></button>
                        </div>
                        <div className='option-4'>
                            <button type="button" className={`btn-4 ${selectedAnswers[1] === 'diff-reason' ? 'selected' : ''}`} onClick={() => handleSelection(1, 'diff-reason')}>For different Reason</button>
                        </div>
                        
                    </div>
                </form>
            </>
        );
    }
    const SecondQuestion = () => {
        return (
            <>
                <form className='div-quest-2'>
                    <div className='question-2'>
                        <h1><span>Q2. </span>What describes you best?</h1>
                    </div>
                    <div className='div-ans-2'>
                        <div className='option-1'><button type="button" className={`btn-1 ${selectedAnswers[2] === 'school-student' ? 'selected' : ''}`} onClick={() => handleSelection(2, 'school-student')}>School Student <span>&#128102;</span></button></div>
                        <div className='option-2'><button type="button" className={`btn-2 ${selectedAnswers[2] === 'college-student' ? 'selected' : ''}`} onClick={() => handleSelection(2, 'college-student')}>College Student <span>&#129489;</span></button></div>
                        <div className='option-3'><button type="button" className={`btn-3 ${selectedAnswers[2] === 'employee' ? 'selected' : ''}`} onClick={() => handleSelection(2, 'employee')}>Employee <span>&#128188;</span></button></div>
                        <div className='option-4'><button type="button" className={`btn-4 ${selectedAnswers[2] === 'other' ? 'selected' : ''}`} onClick={() => handleSelection(2, 'other')}>Other</button></div>
                    </div>
                </form>
            </>
        );
    }
    const ThirdQuestion = () => {
        return (
            <>
                <form className='div-quest-3'>
                    <div className='question-3'>
                        <h1><span>Q3. </span>How much you know about coding?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button type="button" className={`btn-1 ${selectedAnswers[3] === 'none' ? 'selected' : ''}`} onClick={() => handleSelection(3, 'none')}>None</button></div>
                        <div className='option-2'><button type="button" className={`btn-2 ${selectedAnswers[3] === 'little' ? 'selected' : ''}`} onClick={() => handleSelection(3, 'little')}>A Little</button></div>
                        <div className='option-3'><button type="button" className={`btn-3 ${selectedAnswers[3] === 'lot' ? 'selected' : ''}`} onClick={() => handleSelection(3, 'lot')}>a Lot</button></div>
                        <div className='option-4'><button type="button" className={`btn-4 ${selectedAnswers[3] === 'expert' ? 'selected' : ''}`} onClick={() => handleSelection(3, 'expert')}>I'm a Expert</button></div>
                    </div>
                </form>
            </>
        );
    }
    const FourthQuestion = () => {
        return (
            <>
                <form className='div-quest-4'>
                    <div className='question-4'>
                        <h1><span>Q4. </span>Which aspects of coding captivates you?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button type="button" className={`btn-1 ${selectedAnswers[4] === 'appearance' ? 'selected' : ''}`} onClick={() => handleSelection(4, 'appearance')}>How things look(appearance) <span>&#127748;</span></button></div>
                        <div className='option-2'><button type="button" className={`btn-2 ${selectedAnswers[4] === 'logical' ? 'selected' : ''}`} onClick={() => handleSelection(4, 'logical')}>How things work(logical) <span>&#129518;</span></button></div>
                        <div className='option-4'><button type="button" className={`btn-3 ${selectedAnswers[4] === 'both-reason' ? 'selected' : ''}`} onClick={() => handleSelection(4, 'both-reason')}>For Both Aspects</button></div>
                    </div>
                </form>
            </>
        );
    } 
    const  FifthQuestion = () => {
        return (
            <form className='div-quest-5'>
                <div className='question-4'>
                        <h1><span>Q5. </span>Who referred this application to you?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button type="button" className={`btn-1 ${selectedAnswers[5] === 'friends-and-relative' ? 'selected' : ''}`} onClick={() => handleSelection(5, 'friends-and-relative')}>Friends and Relatives <span>&#128108;</span></button></div>
                        <div className='option-2'><button type="button" className={`btn-2 ${selectedAnswers[5] === 'my-company' ? 'selected' : ''}`} onClick={() => handleSelection(5, 'my-company')}>Recommandation of My Company <span>&#127970;</span></button></div>
                        <div className='option-3'><button type="button" className={`btn-3 ${selectedAnswers[5] === 'professors' ? 'selected' : ''}`} onClick={() => handleSelection(5, 'professors')}>My Institute Professionals <span>&#127979;</span></button></div>
                        <div className='option-4'><button type="button" className={`btn-4 ${selectedAnswers[5] === 'nobody' ? 'selected' : ''}`} onClick={() => handleSelection(5, 'nobody')}>Nobody</button></div>
                    </div>
            </form>
        );
    }

    // Add new function to handle form submission
    const handleSubmit = async () => {
        // Validate if all questions are answered
        const allQuestionsAnswered = Object.values(selectedAnswers).every(answer => answer !== '');
        
        if (!allQuestionsAnswered) {
            alert('Please answer all questions before submitting');
            return;
        }

        try {
            // Store answers in localStorage (optional)
            localStorage.setItem('userAnswers', JSON.stringify(selectedAnswers));
            
            // You can also send the data to your backend here
            // const response = await fetch('your-api-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(selectedAnswers)
            // });

            // Navigate to login page after successful submission
            navigate('/login');
        } catch (error) {
            console.error('Error submitting answers:', error);
            alert('There was an error submitting your answers. Please try again.');
        }
    };

    const [currentQuestion, setCurrentQuestion] = useState(1);
    // Function to handle next question
    const handleNextQuestion = (e) => {
        e.preventDefault(); // Prevent form submission
        if (!selectedAnswers[currentQuestion]) {
            alert('Please select an answer before proceeding');
            return;
        }
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit(); //If it's the last question than handle the submission
        }
    };

    const handleBackQuestion = (e) => {
        e.preventDefault();
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const renderQuestion = () => {
        switch(currentQuestion) {
            case 1:
                return FirstQuestion();
            case 2:
                return SecondQuestion();
            case 3:
                return ThirdQuestion();
            case 4:
                return FourthQuestion();
            case 5:
                return FifthQuestion();
            default:
                return FirstQuestion();
        }
    }
    return (
        <>
        <div className='quest-page'>
            <ProgressBar totalQuestion={5}/>
            <div className='div-quest'>
                {renderQuestion()}
            </div>
            <div className='button-container'>
                {currentQuestion === 1 ? '' : <button onClick={handleBackQuestion}>Back</button>}
                <button onClick={handleNextQuestion} className="next-button">{currentQuestion === 5 ? 'Finish' : 'Next'}</button>
            </div>
        </div>
        </>
    );
}
export default Layout;