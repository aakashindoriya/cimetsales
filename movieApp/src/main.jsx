import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Allroutes } from './pages/AllRoutes.jsx'
import { MovieContext } from './context/MovieContext.jsx'

createRoot(document.getElementById('root')).render(<MovieContext><Allroutes/></MovieContext>)
