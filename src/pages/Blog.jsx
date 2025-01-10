import './Blog.css';
// Importation des images
import CodeHTML_CSS from '../assets/img/CodeHTML_CSS.jpeg'; 
import Vente_monnaie from '../assets/img/Vente_monnaie.jpeg'; 
import OrdiGoogle from '../assets/img/OrdiGoogle.jpeg'; 
import ResponsiveOrdi from '../assets/img/ResponsiveOrdi.jpeg'; 
import TecReferencement from '../assets/img/TecReferencement.png'; 
import ApprendreCode from '../assets/img/ApprendreCode.png'; 

// Page de blog
const Blog = () => {
  return (
    <main className="MainBlog d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1 className="LigneBleu">Blog</h1>
      {/* Texte décrivant le contenu du Blog */}
      <p>Bienvenue sur mon blog. Découvrez mes articles sur le développement web et les technologies modernes.</p>
      {/* Conteneur flex pour centrer les cartes */}
      <div className="ContenairBlog d-flex justify-content-center"r style={{ width: '100%' }}>
        {/* Carte 1 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
            src={CodeHTML_CSS}
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
            src={Vente_monnaie}
            className="card-img-top"
            alt="Image illustrant l'article"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Vendre ses produits sur le web</h5>
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
            src={OrdiGoogle}
            className="card-img-top"
            alt="Image illustrant l'article"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Se positionner sur Google</h5>
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
      <div className="ContenairBlog d-flex justify-content-center"r style={{ width: '100%' }}>
        {/* Carte 4 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
            src={ResponsiveOrdi}
            className="card-img-top"
            alt="Image illustrant l'article"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Coder en responsive design</h5>
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
        {/* Carte 5 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
            src={TecReferencement}
            className="card-img-top"
            alt="Image illustrant l'article"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Techniques de référencement</h5>
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
        {/* Carte 6 */}
        <div className="card mx-3 my-3" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Image de la carte */}
          <img
            src={ApprendreCode}
            className="card-img-top"
            alt="Image illustrant l'article"
            style={{ objectFit: "cover", height: "150px" }}
          />
          {/* Contenu de la carte */}
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Apprendre à coder</h5>
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
  )
};

export default Blog;
