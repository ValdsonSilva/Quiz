import { useContext } from "react"
import Quiz from "../img/quiz.svg"
import "./welcome.css"
import { Quizcontext } from "../context/quiz"

const Welcome = () => {
  //consumindo contexto
  const quizState = useContext(Quizcontext)

  console.log(quizState)

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt='Início do Quiz'/>
    </div>
  )
}

export default Welcome