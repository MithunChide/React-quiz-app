import React from 'react';
import { useState } from 'react'; 
import Question from "./Question";
 import questions from './questions';
 import QuizReport from './QuizReport';




function Quiz(){
    const [questionIndex,setQuestionIndex]=useState(0);
    const [responses, setResponses] =useState([]);
    const question= questions[questionIndex];

    const quizComppleted = questionIndex === questions.length;
    if(quizComppleted){
        return <QuizReport responses={responses} questions={questions} />
    }


    const onResponse = (response) =>{
        setResponses([...responses, response])
        setQuestionIndex(questionIndex + 1);
     }
     console.log(responses);
    return(
        <Question onResponse={onResponse} question={question}/>
    )
}
export default Quiz;