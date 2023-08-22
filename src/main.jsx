import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Quizprovider } from './context/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Disponibilizando os meus states para toda a aplicação */}
    <Quizprovider>
      {/* Comp default do react.js para renderizar a aplicação */}
      <App />
    </Quizprovider>
    
  </React.StrictMode>,
)
