import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CurrencyHome from './components/CurrencyHome'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyHome />
  </StrictMode>
)
