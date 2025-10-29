import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './pages/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
