import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/initialCSS/_reset.scss'; // es el reset de estilos de los navegadores
import './styles/initialCSS/_mediaqueries.scss' // son las configuraciones de preferencias del usuario
import './styles/initialCSS/_tags.scss' // estilos globales a etiquetas

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
