import './Contact.css';

// Page de contact avec un formulaire et une section pour les coordonnées
const Contact = () => {
  return (
    <main className="d-flex justify-content-center align-items-center vh-100">
      {/* Conteneur principal */}
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            {/* Titre principal */}
            <h1 className="mb-4">Me Contacter</h1>
          </div>
          <p className="d-flex justify-content-center mb-4">Vous avez une question ou une suggestion ? Contactez-moi via ce formulaire !</p>
          <div className='d-flex justify-content-center w-100'>
            <div className="LigneBleu w-25 pb-5"></div>
          </div>
          {/* Colonne gauche : Formulaire de contact */}
          <div className="col-12 col-md-6 text-center">
            {/* Formulaire */}
            <form className="w-100" style={{ maxWidth: '500px', margin: '0 auto' }}>
              {/* Titre secondaire */}
              <div className='d-flex justify-content-start flex-wrap SousTitre mb-4'>
                <h2 className="d-flex justify-content-start w-100">Formulaire de Contact</h2>
                <div className="LigneBleu w-100"></div>
              </div>
              {/* Champ pour le nom */}
              <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              {/* Champ pour l'email */}
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Entrez votre email"
                  required
                />
              </div>
              {/* Champ pour le message */}
              <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Tapez votre message ici"
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <button type="submit" className="btn btn-primary w-100">Envoyer</button>
            </form>
          </div>

          {/* Colonne droite : Coordonnées et Google Maps */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            {/* Titre secondaire */}
            <div className='d-flex justify-content-start flex-wrap SousTitre mb-4'>
              <h2 className="d-flex justify-content-start w-100">Mes coordonnées</h2>
              <div className="LigneBleu w-100"></div>
            </div>
            {/* Coordonnées */}
            <div className="w-100">
              <ul className="list-unstyled text-start">
                <li><strong>Adresse :</strong> 123 Rue Exemple, 75000 Paris</li>
                <li><strong>Téléphone :</strong> +33 6 12 34 56 78</li>
                <li><strong>Email :</strong> contact@example.com</li>
              </ul>
            </div>

            {/* Google Maps */}
            <div className="map-container mt-4" style={{ width: '100%', height: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990916485406!2d2.2944813156736955!3d48.85884437928778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb3b202c9%3A0x2b0c8e9f3f5d7f88!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1600000000000!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;