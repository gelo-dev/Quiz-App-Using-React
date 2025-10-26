import { useState } from "react";
import Results from "./results";
import Swal from "sweetalert2"; 
function Quiz () {
        const questionBank = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "London", "Paris", "Rome"],
                answer: "Paris",
            },
            {
                question: "Which language is used for web apps?",
                options: ["PHP", "Python", "Javascript", "All"],
                answer: "All",
            },
            {
                question: "What does JSX stand for?",
                options: [
                "JavaScript XML",
                "Java Syntax eXtension",
                "Just a Simple eXample",
                "None of the above",
                ],
                answer: "JavaScript XML",
            },
            {
                question: "Who developed React?",
                options: ["Google", "Facebook", "Microsoft", "Twitter"],
                answer: "Facebook",
            },
            {
                question: "Which hook is used to manage state in a functional component?",
                options: ["useEffect", "useState", "useContext", "useReducer"],
                answer: "useState",
            },
        ];

    const initialAnswers = [null, null, null, null, null];
    
    //array where to put the all users selected answer
    
    //UseState
    // const [ optionSelected, setOptionSelected ]  = useState( 'None') ;  
    //optionSelected hold the current value which is None , setOptionSelected a function to update the state which is the useState('None') the current value is None
    
    const [ userAnswers , setUserAnswers ] = useState(initialAnswers);
            //useState for tracking the userAnswers

    const [ currentQuestion , setCurrentQuestion ] = useState(0) ;
            //useState for tracking the current question and options.
    
    const [ isQuizFinished, setisQuizFinished] = useState(false);        

    const selectedAnswer = userAnswers[currentQuestion];        
    
    
    function handleSelectOption(option){

        const newUserAnswers = [...userAnswers];
        //creating a copy of userAnswers which in the all null element from useState initialAnswers

        newUserAnswers[currentQuestion] = option;
        // updating the value of newUserAnswers base on the [currentQuestion value] from currentQuestion useState to get users selected option

        setUserAnswers(newUserAnswers);
        //updating the answer using the setUSersAnswers function from initialAnswers useState
        
    }  

    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setisQuizFinished(false);
        Swal.fire({
            title: "Quiz Restarted",
            text: `You may now begin the quiz!`,
            icon: 'success',
            confirmButtonText: "OK",
        });
    }
    
    function goToNext(){
        if(currentQuestion === questionBank.length -1){
            setisQuizFinished(true)
        }else{
            setCurrentQuestion(currentQuestion + 1);     
        }
        
    }

    function goToPrev(){
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
            
    }

    if(isQuizFinished){
        return <Results questionBank = {questionBank} userAnswers = {userAnswers} restartQuiz={restartQuiz} /> //passing data from diff components PROPS
    }
    

    return (
        <div>
                <h2> Question {currentQuestion +  1} </h2>
                <p className="question">{questionBank[currentQuestion].question}</p> 

                {questionBank[currentQuestion].options.map((element)=>(
                    <button className={"option" + (selectedAnswer === element ? " selected" : "")} onClick={ ()=> handleSelectOption(element)}>{element}</button>
                    //className={"option" + (selectedAnswer === element ? " selected" : "")} ternary operator
                ))}

                {/* <p>Selected Item: {optionSelected}</p> */}
                <div className="nav-buttons">
                    <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
                    <button onClick={goToNext} disabled={!selectedAnswer}>{currentQuestion === questionBank.length -1 ? 'Finish' :  'Next' }</button>

                </div>

        </div>
    )
}

export default Quiz;
 /* instead of doing thius manually entering all the option 1 by 1 were gonna use map() of javascript */
                /* <button className="option">Berlin</button>
                <button className="option">Paris</button>
                <button className="option">London</button>
                <button className="option">Rome</button> */