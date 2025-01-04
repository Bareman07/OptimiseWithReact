import github from '../assets/img/github.png'; // Importation de l'image
import twitter from '../assets/img/twitter.png';
import linkedin from '../assets/img/linkedin.png';
import './Footer.css';


const Footer = () => {
  return (
    // Footer
    <footer className="FondFooter mt-4">
      <div className="container py-4">
        <div className="row">
          {/* Colonne 1 : informations de contact avec icônes vers les réseaux sociaux */}
          <div className="col-md-3">
            <h4>John Doe</h4>
            <p>
              123 rue de Paris<br />
              75000 Paris<br />
              Téléphone : 01 23 45 67 89
            </p>
            {/* Icônes vers les réseaux sociaux */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px', margin: '1em 12px 1em 12px' }}>
              {/* Lien vers GitHub avec icône */}
              <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer">
                <img src={github} alt="Favicon" style={{ width: '30px', height: '30px' }} /> {/* GitHub */}
              </a>
              <br />
              {/* Lien vers Twitter avec icône */}
              <a href="https://twitter.com/johndoe" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Favicon" style={{ width: '30px', height: '30px' }} /> {/* Twitter */}
              </a>
              <br />
              {/* Lien vers LinkedIn avec icône */}
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Favicon" style={{ width: '30px', height: '30px' }} /> {/* LinkedIn */}
              </a>
            </div>
          </div>

          {/* Colonne 2 : liens vers les pages principales */}
          <div className="col-md-3">
            <h4>Liens Utiles</h4>
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
            <h4>Mes Dernières Réalisations</h4>
            {/* Liste des réalisations avec liens vers chaque projet */}
            <ul className="list-unstyled">
              <li>
                <a href="/portfolio#project1" className="text-dark">
                  Réalisation 1
                </a>
              </li>
              <li>
                <a href="/portfolio#project2" className="text-dark">
                  Réalisation 2
                </a>
              </li>
              <li>
                <a href="/portfolio#project3" className="text-dark">
                  Réalisation 3
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : derniers articles */}
          <div className="col-md-3">
            <h4>Mes Derniers Articles</h4>
            {/* Liste des articles récents avec liens vers chaque article */}
            <ul className="list-unstyled">
              <li>
                <a href="/blog#article1" className="text-dark">
                  Article 1
                </a>
              </li>
              <li>
                <a href="/blog#article2" className="text-dark">
                  Article 2
                </a>
              </li>
              <li>
                <a href="/blog#article3" className="text-dark">
                  Article 3
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
