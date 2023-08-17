import { createContext, useReducer} from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    // situação da aplicação
    gameStage: STAGES[0],
    // arquivo com minhas perguntas, opções e respostas
    questions,
    // controle de estado para minha questão atual
    currentQuestion: 0,
    // estado de acerto do usário
    score: 0,

    answerSelected: false,
}

const quizReducer = (state, action) => {
        switch(action.type) {
            //inicio do game
            case "CHANGE_STATE":
                return {
                    ...state,
                    // O status vai para "Playing" no stage
                    gameStage: STAGES[1]
                }

            case "REODER_QUESTIONS":
                /*Função para retornar ramdomizar o surgimento das perguntas*/
                const reorderQuestions = questions.sort(() => {
                    return Math.random() - 0.5;
                })
                
                //Todas as vezes iremos retornar uma pergunta diferente
                return {
                    ...state,
                    questions: reorderQuestions,
                }

            case "CHANGE_QUESTION":
                // para ir para próxima question
                const nextQuestion = state.currentQuestion + 1;
                // estado do controle do game
                let endGame = false

                //Se não existir pergunta, iremos setar endGame
                if (!questions[nextQuestion]) {
                    endGame = true
                }

                //Iremos sempre verificar a expressão de cima
                return {
                    ...state,
                    // aqui nós saltaremos para a próxima question
                    currentQuestion : nextQuestion,
                    // alteremos o gameStage para o "End" se endGame=true
                    gameStage : endGame ? STAGES[2] : state.gameStage,
                    //voltando ao estado inicial
                    answerSelected: false
                }

            case "NEW_GAME":
                // estado inicial do jogo
                return initialState

            case "CHECK_ANSWER":
                // para quebrar o bug de contar vários acertos na mesma pergunta
                if (state.answerSelected) return state;

                // a resposta certa
                const answer = action.payload.answer
                // a resposta escolhida pelo user
                const option = action.payload.option 
                // var de controle
                let correctAnswer = 0 
                
                // checar se são iguais
                if (answer === option) correctAnswer = 1;

                return {
                    ...state,
                    // somar 1 a var de estado "score"
                    score: state.score + correctAnswer,
                    answerSelected: option,
                }
            
            default:
                return state
        }
}

//Meu context
export const Quizcontext = createContext();

//Meu provider
export const Quizprovider = ({children}) => {
    const value = useReducer(quizReducer, initialState);


    //iremos reutilizar todos esses estados para controlar nossa aplicação
    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
};