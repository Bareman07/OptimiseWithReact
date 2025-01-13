import { NavLink } from "react-router-dom"; // Importation de la fonction de routage
import '@fortawesome/fontawesome-free/css/all.min.css'; // importation de Font Awesome pour les icônes
import './Footer.css';


const Footer = () => {
  return (
    // Footer
    <footer className="FondFooter mt-4">
      <div className="container py-4">
        <div className="row">
          {/* Colonne 1 : informations de contact avec icônes vers les réseaux sociaux */}
          <div className="col-md-3">
            <h4><strong>John Doe</strong></h4>
            <p>
              123 rue de Paris<br />
              75000 Paris<br />
              Téléphone : 01 23 45 67 89
            </p>
            {/* Icônes vers les réseaux sociaux */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px', margin: '1em 12px 1em 12px' }}>
              {/* Lien vers GitHub avec icône */}
              <NavLink to="/Profil">
                <i className="FaviconFooter fa-brands fa-github"></i> {/* GitHub */}
              </NavLink>
              <br />
              {/* Lien vers Twitter avec icône */}
              <a href="https://twitter.com/johndoe" target="_blank" rel="noreferrer">
                <i className="FaviconFooter fa-brands fa-square-twitter"></i> {/* Twitter */}
              </a>
              <br />
              {/* Lien vers LinkedIn avec icône */}
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                <i className="FaviconFooter fa-brands fa-linkedin"></i> {/* LinkedIn */}
              </a>
            </div>
          </div>

          {/* Colonne 2 : liens vers les pages principales */}
          <div className="col-md-3">
            <h4><strong>Liens Utiles</strong></h4>
            {/* Liste de liens vers les pages principales */}
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/Blog" className="text-dark">
                  Blog
                </a>
              </li>
              <li>
                <a href="/services" className="text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Me contacter
                </a>
              </li>
              <li>
                <a href="/mention-legales" className="text-dark">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : réalisations récentes */}
          <div className="col-md-3">
            <h4><strong>Mes Dernières Réalisations</strong></h4>
            {/* Liste des réalisations avec liens vers chaque projet */}
            <ul className="list-unstyled">
              <li>
                <a href="/portfolio#project1" className="text-dark">
                  Fresh food
                </a>
              </li>
              <li>
                <a href="/portfolio#project2" className="text-dark">
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a href="/portfolio#project3" className="text-dark">
                  Espace bien-être
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : derniers articles */}
          <div className="col-md-3">
            <h4><strong>Mes Derniers Articles</strong></h4>
            {/* Liste des articles récents avec liens vers chaque article */}
            <ul className="list-unstyled">
              <li>
                <a href="/blog#article1" className="text-dark">
                  Coder son site en HTML/CSS
                </a>
              </li>
              <li>
                <a href="/blog#article2" className="text-dark">
                  Vendre ses produits sur le web
                </a>
              </li>
              <li>
                <a href="/blog#article3" className="text-dark">
                  Se positionner sur Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright et lien pour remonter en haut de la page */}
      <div className="copyright text-center text-white mt-3">
        <p>© 2024 John Doe. Tous droits réservés.</p>
        <a href="#top" className="text-white m-10">
            Retour en haut
        </a>
      </div>
    </footer>
  );
};

export default Footer;
