import { useState, useEffect } from "react";

export default function UserProfile() {
  // État pour stocker les données utilisateur
  const [user, setUser] = useState(null); //Initialise l'état "user" avec une valeur par défaut de null.
  const [loading, setLoading] = useState(true); // Pour indiquer que les données sont en cours de chargement
  const [error, setError] = useState(null); // Pour capturer les éventuelles erreurs

  // Fonction pour récupérer les données utilisateur
  const fetchUser = async () => {
    try {
      // Envoi d'une requête HTTP GET à l'URL pour récupérer les données utilisateur
      const response = await fetch("https://api.github.com/users/github-john-doe");
  
      // Vérification si la réponse est correcte (statut HTTP 200-299)
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données."); // Lancer une erreur en cas de problème
      }
  
      // Conversion de la réponse en JSON (données exploitables)
      const data = await response.json();
  
      // Mise à jour de l'état avec les données utilisateur récupérées
      setUser(data);
  
      // Indique que le chargement est terminé (plus besoin de montrer un indicateur de chargement)
      setLoading(false);
    } catch (err) {
      // Capture de l'erreur si la requête ou le traitement échoue
      setError(err.message); // Mise à jour de l'état pour afficher l'erreur
      setLoading(false); // Désactiver l'indicateur de chargement même en cas d'erreur
    }
  };

  // Utilisation de useEffect pour récupérer les données au premier rendu
  useEffect(() => {
    fetchUser();
  }, []);

  // Affichage pendant le chargement
  if (loading) return <p>Chargement des données...</p>;

  // Affichage en cas d'erreur
  if (error) return <p>Erreur : {error}</p>;

  // Affichage des données utilisateur
  return (
    <div className="user-profile">
      <main>
        <h1>Profil GitHub : {user.name || user.login}</h1>
        <img className="ms-4" src={user.avatar_url} alt={`Avatar de ${user.login}`} width="150" />
        <p className="ms-4"><strong>Nom d&#x27;utilisateur :</strong> {user.login}</p>
        <p className="ms-4"><strong>ID :</strong> {user.id}</p>
        <p className="ms-4"><strong>Bio :</strong> {user.bio || "Pas de bio disponible."}</p>
        <p className="ms-4"><strong>Nombre de dépôts publics :</strong> {user.public_repos}</p>
        <p className="ms-4"><strong>Nombre de followers :</strong> {user.followers}</p>
        <p className="ms-4"><strong>Nombre de following :</strong> {user.following}</p>
        <p className="ms-4"><strong>Profil GitHub :</strong> <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
        <p className="ms-4"><strong>Créé le :</strong> {new Date(user.created_at).toLocaleDateString()}</p>
        <p className="ms-4"><strong>Dernière mise à jour :</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
      </main>
    </div>
  );
}

// future button to go to the profile page
// import { NavLink } from "react-router-dom"; // Importation de la fonction de routage
// <button
//   className="btn btn-primary mt-3"
//   // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// >
//   <NavLink
//     to="/Profil"
//     className={({ isActive }) =>
//       isActive ? "nav-link active-link" : "nav-link"
//     }
//   >
//     En savoir plus
//   </NavLink>
// </button>