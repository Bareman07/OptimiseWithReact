import './MentionLegales.css';
import { Accordion } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MentionLegales = () => {
  return (
    <main className="container">
      <div className="d-flex flex-wrap justify-content-center w-100">
        <h1 className="w-100">Mentions Légales</h1>
        <div className="LigneBleu w-25 mb-4"></div>
      </div>
      <Accordion defaultActiveKey="0">
        {/* Section : Éditeur du site */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <h2 className="mb-3">John Doe</h2>
            <div className="d-flex align-items-center mb-1">
            <i className="fa-solid fa-location-dot me-1"></i>
              <p>40 Rue Laure Diebold</p>
            </div>
            <p>69009 Lyon, France</p>
            <div className="d-flex align-items-center mb-1">
              <i className="fa-solid fa-mobile-screen me-1"></i>
              <a href="tel:+33620304050">06 20 30 40 50</a>
            </div>
            <div className="d-flex align-items-center mb-1">
              <i className="fa-solid fa-envelope me-1"></i>
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Section : Hébergeur */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h2 className="mb-3">Always Data</h2>
            <p>123 Avenue du Web</p>
            <p>75000 Paris, France</p>
            <div className="d-flex align-items-center mb-1 mt-3">
            <i className="fa-solid fa-globe me-1"></i>
              <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noopener noreferrer" className="text-decoration-none ">
                www.alwaysdata.com
              </a>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Section : Crédits */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h2 className="mb-3">Crédits</h2>
            <p className="mb-2">Le site a été réalisé par John Doe étudiant du CEF</p>
            <p className="mb-2">Les Images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  );
};

export default MentionLegales;