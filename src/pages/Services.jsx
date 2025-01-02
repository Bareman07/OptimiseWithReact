import './Services.css';

// Page des services proposés
const Services = () => {
  return (
    <main className="MainServices d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1 className="LigneBleu">Services</h1>
      {/* Texte décrivant le contenu du Services */}
      <p>Je propose des services de développement web, de conception UI/UX, et d&apos;optimisation SEO.</p>
      {/* Conteneur flex pour centrer les cartes */}
      <div className="ContenairServices d-flex justify-content-center"r style={{ width: '100%' }}>
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

export default Services;
