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
          src={ "https://via.placeholder.com/150" }
          className="card-img-top"
          alt="Image illustrant l'article"
          style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Coder son site en HTML/CSS</h5>
            <p className="card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: "#007BFF" }}>
              Lire la suite
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="card-footer text-muted" style={{ fontSize: "0.8rem", backgroundColor: "#f8f9fa" }}>
            Publié le 22 août 2022
          </div>
        </div>
        {/* Carte 2 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
          src={ "https://via.placeholder.com/150" }
          className="card-img-top"
          alt="Image illustrant l'article"
          style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Coder son site en HTML/CSS</h5>
            <p className="card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: "#007BFF" }}>
              Lire la suite
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="card-footer text-muted" style={{ fontSize: "0.8rem", backgroundColor: "#f8f9fa" }}>
            Publié le 22 août 2022
          </div>
        </div>
        {/* Carte 3 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
          src={ "https://via.placeholder.com/150" }
          className="card-img-top"
          alt="Image illustrant l'article"
          style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Coder son site en HTML/CSS</h5>
            <p className="card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
              Apprenez à coder votre site web en utilisant les bases du HTML et CSS.
            </p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: "#007BFF" }}>
              Lire la suite
            </a>
          </div>
          {/* Footer de la carte */}
          <div className="card-footer text-muted" style={{ fontSize: "0.8rem", backgroundColor: "#f8f9fa" }}>
            Publié le 22 août 2022
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
