import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component from './component.jsx'
import Header from './header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App teste = "isso é um teste" />
    <Component />
  </StrictMode>,
)
