

// Page de blog
const Blog = () => {
  return (
    <main className="MainBlog d-flex flex-column justify-content-center align-items-center">
      {/* Titre principal de la page */}
      <h1>Blog</h1>
      {/* Texte décrivant le contenu du Blog */}
      <p>Bienvenue sur mon blog. Découvrez mes articles sur le développement web et les technologies modernes.</p>
      {/* Conteneur flex pour centrer les cartes */}
      <div className="ContenairBlog d-flex justify-content-center"r style={{ width: '100%' }}>
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
      <div className="ContenairBlog d-flex justify-content-center"r style={{ width: '100%' }}>
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
  )
};

export default Blog;
