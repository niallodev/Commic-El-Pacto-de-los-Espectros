import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import CommicApp from './CommicApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CommicApp />
  </StrictMode>,
)
