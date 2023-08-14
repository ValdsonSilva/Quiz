import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Quizprovider } from './context/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quizprovider>
      <App />
    </Quizprovider>
    
  </React.StrictMode>,
)
