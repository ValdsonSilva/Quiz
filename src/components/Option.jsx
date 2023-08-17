import React from 'react'
import { Quizcontext } from '../context/quiz'
import { useContext } from 'react'

import "./Option.css"

const Option = ({option ,selectOption, answer}) => {
  const [quizState, dispatch] = useContext(Quizcontext);

  return (
    // Aqui temos que passar a refência da função e não a função propriamente dita!
    <div className={`option ${
      /*esse código controla o estilo da opção com base no acerto 
        da respota dado pelo usuário*/
      quizState.answerSelected && option === answer ? "correct" : "" 
      } ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }`} 
      onClick={selectOption}>
      
      <p>{option}</p>
      
    </div>
  )
}

export default Option

/* O que estava causando o erro de renderização infinita era o fato de
o componente <Option/> estar sendo renderizado ao mesmo tempo em que a função
selectOption estava sendo executada/chamada dentro dele, dessa forma, a nossa aplicação estava
entrando em uma espécie de conflito de renderização simultânea em um mesmo
componente!
Para resolver isso só tinhamos que fazer uma pequena alteração na chamada da função
selectOption no componente

------Tinhamos que trocar isso------:
<div className='option' onClick={selectOption()}/>

------Por isso-----:
<div className='option' onClick={selectOption}>
*/