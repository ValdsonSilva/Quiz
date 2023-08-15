import React from 'react'
import { Quizcontext } from '../context/quiz'
import { useContext } from 'react'

import "./Option.css"

const Option = ({option ,selectOption, answer}) => {
  const [quizState, dispatch] = useContext(Quizcontext);

  return (
    <div className='option' onClick={selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option