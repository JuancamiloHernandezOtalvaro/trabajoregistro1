import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Componente_Principal } from './assets/componente_principal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Componente_Principal/>
  </StrictMode>,
)
