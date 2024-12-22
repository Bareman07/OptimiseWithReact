import './MentionLegales.css';

// Page des mentions légales
const MentionLegales = () => {
  return (
    <main>
      {/* Titre principal de la page */}
      <h1>Mentions Légales</h1>
      {/* Informations légales */}
      <p>Éditeur : John Doe</p>
      <p>Hébergeur : Exemple Hosting</p>
      <p>
        Crédits images :{' '}
        <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
          Pixabay
        </a>
      </p>
    </main>
  );
};

export default MentionLegales;
