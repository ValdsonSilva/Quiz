import React from 'react'
import { Quizcontext } from '../context/quiz'
import { useContext } from 'react'
import "./Question.css"
import Option from './Option'

function Question() {
  const [quizState, dispatch] = useContext(Quizcontext);

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
     //status e dados de checagem
     dispatch({
    type: "CHECK_ANSWER", 
     payload: {answer: currentQuestion.answer, option}})
  }

  return (
    <div id='question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id='options-container'>
            {currentQuestion.options.map((option) => (
                <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)}/>
            ))}
        </div>
        {quizState.answerSelected && (
             <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>continuar</button>
        )}
       
    </div>
  )
}

export default Question