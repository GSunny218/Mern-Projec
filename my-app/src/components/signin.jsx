import React from 'react';

const Singin = () => {
    const FirstQuestion = () => {
        return (
            <>
                <form className='div-quest-1'>
                    <div className='question-1'>
                        <h1><span>Q1</span>Why your want to learn to code?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button value={'for-fun'}>For Fun</button></div>
                        <div className='option-2'><button value={'pro-dev'}>To become a Professional developer</button></div>
                        <div className='option-3'><button value={'for-job'}>For my Current Job</button></div>
                        <div className='option-4'><button value={'diff-reason'}>For different Reason</button></div>
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
                        <h1><span>Q2</span>What describes you best?</h1>
                    </div>
                    <div className='div-ans-2'>
                        <div className='option-1'><button value={'school-student'}>School Student</button></div>
                        <div className='option-2'><button value={'college-student'}>College Student</button></div>
                        <div className='option-3'><button value={'employee'}>Employee</button></div>
                        <div className='option-4'><button value={'nota'}>None of These Above</button></div>
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
                        <h1><span>Q3</span>How much you know about coding?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button value={'none'}>None</button></div>
                        <div className='option-2'><button value={'little'}>A Little</button></div>
                        <div className='option-3'><button value={'lot'}>a Lot</button></div>
                        <div className='option-4'><button value={'master'}>I'm a Expert</button></div>
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
                        <h1><span>Q4</span>Which aspects of coding captivates you?</h1>
                    </div>
                    <div className='div-ans-1'>
                        <div className='option-1'><button value={'for-fun'}>How things look(appearance)</button></div>
                        <div className='option-2'><button value={'pro-dev'}>How things work(logical)</button></div>
                        <div className='option-3'><button value={'for-jab'}>For my Current Job</button></div>
                        <div className='option-4'><button value={'diff-reason'}>For different Reason</button></div>
                    </div>
                </form>
            </>
        );
    } 
    const  FiveQuestion = () => {}
    return (
        <div></div>
    );
}