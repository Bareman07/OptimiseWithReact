// Importation des styles Bootstrap
// Pas besoin d'importer React à partir de React 17 si non utilisé directement
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'; // Importation de la fonction de routage
import './Header.css';

// Le composant Header : barre de navigation qui s'affiche en haut de chaque page.
const Header = () => {
  return (
    // Header contenant la barre de navigation
    <header>
      {/* Navigation avec Bootstrap */}
      <nav className="FondHeader navbar navbar-expand-lg navbar-dark">
         {/* container-fluid permet à la barre de navigation de s'étendre sur toute la largeur */}
        <div className="container-fluid">
          {/* Logo ou nom de la marque qui renvoie à la page d'accueil */}
          <Link className="navbar-brand me-3" to="/">
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                ACCUEIL
                </NavLink>
             </li>

              {/* Lien vers la page Blog */}
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                BLOG
                </NavLink>
             </li>

              {/* Lien vers la page Services */}
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                SERVICES
                </NavLink>
             </li>

              {/* Lien vers la page Réalisations */}
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                RÉALISATIONS
                </NavLink>
             </li>

              {/* Lien vers la page Contact */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                CONTACT
                </NavLink>
             </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
