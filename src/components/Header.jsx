// Importation des styles Bootstrap
// Pas besoin d'importer React à partir de React 17 si non utilisé directement
import favicon from '../assets/img/Favicon.png'; // Importation de l'image
import { Link } from 'react-router-dom'; // Importation de la fonction de routage

// Le composant Header : barre de navigation qui s'affiche en haut de chaque page.
const Header = () => {
  return (
    // Header contenant la barre de navigation
    <header>
      {/* Navigation avec Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         {/* container-fluid permet à la barre de navigation de s'étendre sur toute la largeur */}
        <div className="container-fluid">
          {/* Logo ou nom de la marque qui renvoie à la page d'accueil */}
          <Link className="navbar-brand" to="/">
            <img src={favicon} alt="Favicon" style={{ width: '30px', height: '30px' }} />
            John Doe
          </Link>

          {/* Bouton burger pour navigation responsive */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Lien vers la page d'accueil */}
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Accueil
                </a>
              </li>

              {/* Lien vers la page À propos */}
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  À propos
                </a>
              </li>

              {/* Lien vers la page Services */}
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>

              {/* Lien vers la page Réalisations */}
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Réalisations
                </a>
              </li>

              {/* Lien vers la page Contact */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;