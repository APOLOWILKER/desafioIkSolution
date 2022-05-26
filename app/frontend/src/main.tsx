import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { TodoProvider } from './context/Context'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
