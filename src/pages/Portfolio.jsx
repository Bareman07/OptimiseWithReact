import BienEtre from '../assets/img/BienEtre.jpeg'; 
import FreshFood from '../assets/img/FreshFood.jpeg'; 
import AkiraRestaurant from '../assets/img/AkiraRestaurant.jpeg'; 
import './Portfolio.css';

// Page présentant les réalisations
const Portfolio = () => {
  return (
    <main className="MainPorteFolio d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1 className="LigneBleu">Portfolio</h1>
      {/* Texte décrivant le contenu du portfolio */}
      <p>Découvrez mes projets récents, allant d&apos;applications React à des sites web responsives.</p>
      {/* Conteneur flex pour centrer les cartes */}
      <div className="ContenairCardPortefolio d-flex justify-content-center"r style={{ width: '100%' }}>
        {/* Carte 1 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
            src={FreshFood}
            className="card-img-top"
            alt="Legumes frais"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body d-flex flex-column align-items-center card-body">
            <h5 className="text-center card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Fresh food</h5>
            <p className="text-center card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="ButtonPortfolio btn btn-primary d-flex align-items-center justify-content-center">
              Voir
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="d-flex justify-content-center text-center card-footer text-muted" >
            Site réalisé avec PHP et MSQL
          </div>
        </div>
        {/* Carte 2 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
          src={AkiraRestaurant}
          className="card-img-top"
          alt="Image illustrant l'article"
          style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body d-flex flex-column align-items-center card-body">
            <h5 className="text-center card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Restaurant Akira</h5>
            <p className="text-center card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="ButtonPortfolio btn btn-primary d-flex align-items-center justify-content-center">
              Voir
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="d-flex justify-content-center text-center card-footer text-muted" >
            Site réalisé avec WorldPress
          </div>
        </div>
        {/* Carte 3 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
          src={BienEtre}
          className="card-img-top"
          alt="Image illustrant l'article"
          style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body d-flex flex-column align-items-center card-body">
            <h5 className="text-center card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Espace bien-être</h5>
            <p className="text-center card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="ButtonPortfolio btn btn-primary d-flex align-items-center justify-content-center">
              Voir
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="d-flex justify-content-center text-center card-footer text-muted" >
            Site réalisé en HTML/CSS
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
