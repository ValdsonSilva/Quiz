import { createContext, useReducer} from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0
}

const quizReducer = (state, action) => {
        console.log(state, action)

        switch(action.type) {
            case "CHANGE_STATE":
                return {
                    ...state,
                    gameStage: STAGES[1]
                }
            case "REODER_QUESTIONS":
                const reorderQuestions = questions.sort(() => {
                    return Math.random() - 0.5;
                })

                return {
                    ...state,
                    questions: reorderQuestions,
                }
            case "CHANGE_QUESTION":
                const nextQuestion = state.currentQuestion + 1;
                let endGame = false

                if (!questions[nextQuestion]) {
                    endGame = true
                }

                return {
                    ...state,
                    currentQuestion : nextQuestion,
                    gameStage : endGame ? STAGES[2] : state.gameStage
                }
            case "NEW_GAME":
                // estado inicial do jogo
                return initialState

            case "CHECK_ANSWER":
                const answer = action.payload.answer
                const option = action.payload.option 
                let correctAnswer = 0 
                
                if (answer === option) correctAnswer = 1;

                return {
                    ...state,
                    score: state.score + correctAnswer,
                    
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

    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
};