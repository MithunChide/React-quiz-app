// import React from "react";
// import questions from "./questions";
import { Link } from 'react-router-dom';

function QuizReport({responses=[],questions=[]}) {
    const totalScore = questions.reduce((score,question,index)=>{
        const {correctOption} = question;
        const userOption = responses[index];
        if(correctOption === userOption){
            return score + 1;
        }
        return score;
    },0);
    return (
        <div className="height">
            <Link to="/" className="take-home">Take me HomePage...</Link>
         <h1>Report</h1>
         <h1> ✨✨✨You Scored {totalScore}✨✨✨</h1>

         {questions.map((question,i)=>{
             const {prompt,options,correctOption} = question;
             const userResponse = responses[i];
             const selectUserOption = options[userResponse];
             const correctResponse = options[correctOption]
            return (
                <>
                <p className="question--Prompt">{prompt}</p>
                <p>Your Response = <span style={{color:"#b4ba65"}}>{selectUserOption}</span></p>
                <p>Correct Response =<span style={{color: "#65afba"}}>{correctResponse}</span> </p>
                <hr/>
                </>
                
            )
          
         })}
       
        </div>
      
    )
}
export default QuizReport;