import { createContext, useReducer} from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {
        
}

//Meu context
export const Quizcontext = createContext();

//Meu provider
export const Quizprovider = ({children}) => {
    const value = {name: "Quiz"}

    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
};