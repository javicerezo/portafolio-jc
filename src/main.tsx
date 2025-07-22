import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss'
// este main contiene la carpeta styles al completo, reset de estilos de los navegadores, 
// configuraciones de preferencias del usuario, estilos globales a etiquetas...

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
