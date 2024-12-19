// Importation des modules React et de la bibliothèque de routage react-router-dom
// import React from 'react'; //(Nouvelle version pplus besoin d'importer )
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants partagés
import Header from './components/Header'; // Barre de navigation
import Footer from './components/Footer'; // Pied de page

// Importation des pages
import Home from './pages/Home'; // Page d'accueil
import About from './pages/About'; // Page À propos
import Services from './pages/Services'; // Page Services
import Portfolio from './pages/Portfolio'; // Page Réalisations
import Blog from './pages/Blog'; // Page Blog
import Contact from './pages/Contact'; // Page Contact
import MentionLegales from './pages/MentionLegales'; // Page Mentions Légales

// Importation du fichier CSS pour appliquer les styles au composant
import './App.css';

// Composant principal de l'application
const App = () => {
  return (
    // Enveloppe l'application dans un Router pour gérer les routes
    <Router>
      {/* Header : présent sur toutes les pages */}
      <Header />

      {/* Système de gestion des routes */}
      <Routes>
        {/* Déclare les différentes routes */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page À propos */}
        <Route path="/services" element={<Services />} /> {/* Route pour la page Services */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Route pour la page Réalisations */}
        <Route path="/blog" element={<Blog />} /> {/* Route pour la page Blog */}
        <Route path="/contact" element={<Contact />} /> {/* Route pour la page Contact */}
        <Route path="/mention-legales" element={<MentionLegales />} /> {/* Route pour la page Mentions Légales */}
      </Routes>

      {/* Footer : présent sur toutes les pages */}
      <Footer />
    </Router>
  );
};

// Exportation du composant principal
export default App;