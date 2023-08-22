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
     // altera o action.type do reducer
     dispatch({
        // action.type do reducer
        type: "CHECK_ANSWER", 
        // envia a resposta correta e a opção selecionada
        payload: {answer: currentQuestion.answer, option}})
  }

  return (
    <div id='question'>
        {/*acessando o state currentQuestion=0 do initialState
         acessando o state questions( [] ) e medindo seu tamanho */}
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        {/* Acessando a chave question do meu data questios */}
        <h2>{currentQuestion.question}</h2>

        <div id='options-container'>
            {/* Acessando/percorrendo a chave options do meu data questions */}
            {currentQuestion.options.map((option) => (
                // renderize o comp Option a cada iteração
                <Option 
                  // Deve sempre passar a key
                  key={option} 
                  // acessando/enviando minhas alternativas da pergunta
                  option={option} 
                  // acessando/enviando a resposta correta dentre as options
                  answer={currentQuestion.answer} 

                  selectOption={() => onSelectOption(option)}/>
            ))}
        
        </div>
        {/* acessando o state answerSelected do initialState 
        e verificando se o seus estado é igual true*/}
        {quizState.answerSelected && (
              // exibe o botão de avanço para a próxima questão
             <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>continuar</button>
        )}
       
    </div>
  )
}

export default Question