import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as BrowseRoute } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowseRoute>
    <App />
    </BrowseRoute>
  </StrictMode>,
)
