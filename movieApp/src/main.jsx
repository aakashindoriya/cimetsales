import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Allroutes } from './pages/AllRoutes.jsx'

createRoot(document.getElementById('root')).render(<Allroutes/>)
