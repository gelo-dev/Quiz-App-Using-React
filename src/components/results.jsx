import React, {useEffect , useState} from "react";


                  //the imported data from quiz component (props)  {questionBank,userAnswers ,restartQuiz}  
function Results({questionBank,userAnswers ,restartQuiz}){

function getScore(){
    let finalScore = 0;

        userAnswers.forEach((element,index)=>{
            if(element === questionBank[index].answer){               
                finalScore++;
            }
    
        });
    
    
    return finalScore;
}
const score= getScore();
    return (
        <div>
            <h2>Quiz Completed!</h2>
        
            <p>Your Score : {score}/{questionBank.length}</p>

            <div>
                    {questionBank.map((item, index) => (
                        <div key={index}>
                            <h3>{item.question}</h3>
                                <ul className="result-options">
                                    {item.options.map((option, i) => {
                                        const userAnswer = userAnswers[index]; // user's answer for this question 

                                    return (
                                        <li
                                        key={i}
                                        className={`result-option ${
                                            option === item.answer ? "correct" //  correct answer = green
                                            : option === userAnswer && option !== item.answer
                                            ? "wrong" //  user's wrong answer = red
                                            : ""
                                        }`}
                                        >
                                        {option}
                                        </li>
                                    );
                                    })}
                                </ul>
                        </div>
                    ))}
            </div>
            

            <button className="restart-button" onClick={restartQuiz} >Restart</button>

        </div>
    );

}
export default Results;