

// Page de contact avec un formulaire
const Contact = () => {
  return (
    <main>
      {/* Titre principal de la page */}
      <h1>Contact</h1>
      {/* Formulaire de contact */}
      <form>
        {/* Champ pour le nom */}
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        {/* Champ pour l'email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        {/* Champ pour le message */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        {/* Bouton d'envoi */}
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
};

export default Contact;
