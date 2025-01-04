// Importation de StrictMode depuis React, utilisé pour activer des vérifications de développement
import { StrictMode } from 'react';
// Importation de la méthode createRoot depuis react-dom/client pour initialiser et rendre l'application dans la racine du DOM
import { createRoot } from 'react-dom/client';
// Importation du fichier CSS de Bootstrap pour ajouter des styles par défaut pour les composants de l'application
import 'bootstrap/dist/css/bootstrap.min.css';
// Importation du fichier CSS personnalisé pour ajouter des styles spécifiques à l'application
import './index.css';
// Importation du composant principal App à partir du fichier App.jsx
import App from './App.jsx';


// Créer un "root" React dans l'élément HTML avec l'id 'root' et y rendre l'application
createRoot(document.getElementById('root')).render(
  // Utilisation de StrictMode pour activer des vérifications en mode développement
  <StrictMode>
    {/* Rendu du composant App à l'intérieur de StrictMode */}
    <App />
  </StrictMode>,
)
