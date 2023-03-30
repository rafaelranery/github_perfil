import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PI as numeroPi, GPM_BRASIL } from './teste'
import nomes from './nomes' //se o export esta no default, o nome aqui pode ser qualquer um (lembra do imports do jQuery)

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
