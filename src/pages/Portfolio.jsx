import './Portfolio.css';

// Page présentant les réalisations
const Portfolio = () => {
  return (
    <main className="MainPorteFolio d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1>Portfolio</h1>
      {/* Texte décrivant le contenu du portfolio */}
      <p>Découvrez mes projets récents, allant d&apos;applications React à des sites web responsives.</p>
      {/* Conteneur flex pour centrer les cartes */}
      <div className="ContenairCardPortefolio d-flex justify-content-center"r style={{ width: '100%' }}>
        <div className="card mx-4 my-4" style={{ width: '18rem' }}>
            {/* Image de la card1 */}
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Image de la card" />
        </div>
        <div className="card mx-4 my-4" style={{ width: '18rem' }}>
            {/* Image de la card2 */}
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Image de la card" />
        </div>
        <div className="card mx-4 my-4" style={{ width: '18rem' }}>
            {/* Image de la card3 */}
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Image de la card" />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
