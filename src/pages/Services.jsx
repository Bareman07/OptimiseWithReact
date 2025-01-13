import './Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // importation de Font Awesome pour les icônes

// Page des services proposés
const Services = () => {
  return (
    <main className="MainServices d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1>Mes Services</h1>
      {/* Texte décrivant le contenu du Services */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="mx-3 text-center">Je propose des services de développement web, de conception UI/UX, et d&apos;optimisation SEO.</p>
      </div>
      {/* Conteneur flex pour centrer les cartes */}
      <div className='d-flex justify-content-center w-100'>
            <div className="LigneBleu w-25 pb-5"></div>
      </div>
      <div className="ContenairServices d-flex justify-content-center"r style={{ width: '100%' }}>
        <div className="d-flex flex-column justify-content-center align-items-center card mx-4 my-4" style={{ height: '20rem' ,width: '20rem' }}>
            {/* UX design */}
            <i className="text-center FaviconFonta fa-solid fa-display fs-2 my-2"></i>
            <h2 className="h2Services ">UX DESIGN</h2>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="mx-3 text-center">
              Lorem <strong>ipsum odor</strong> amet, consectetuer adipiscing elit. Torquent ullamcorper in lacinia vulputate cras senectus porta.
              </p>
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center card mx-4 my-4" style={{ height: '20rem' ,width: '20rem' }}>
            {/* DÉVELOPPEMENT WEB */}
            <i className="text-center FaviconFonta fa-solid fa-file-code fs-2 my-2"></i>
            <h2 className="h2Services ">DÉVELOPPEMENT WEB</h2>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="mx-3 text-center">
              Lorem <strong>ipsum odor</strong> amet, consectetuer adipiscing elit. Torquent ullamcorper in lacinia vulputate cras senectus porta.
              </p>
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center card mx-4 my-4" style={{ height: '20rem' ,width: '20rem' }}>
            {/* RÉFÉRENCEMENT */}
            <i className="FaviconFonta fa-solid fa-magnifying-glass-dollar fs-2 my-2"></i>
            <h2 className="h2Services ">RÉFÉRENCEMENT</h2>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="mx-3 text-center">
              Lorem <strong>ipsum odor</strong> amet, consectetuer adipiscing elit. Torquent ullamcorper in lacinia vulputate cras senectus porta.
              </p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
