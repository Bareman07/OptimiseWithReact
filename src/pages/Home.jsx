import Accueil from '../assets/img/Accueil_fond_john_doe.jpeg'; // Importation de l'image
import Bureau from '../assets/img/travail_bureau.jpeg';

// Page d'accueil du site
const Home = () => {
  return (
    <main>
        <div className="d-flex justify-content-center align-items-center text-center" // d-flex Active Flexbox. 
            style={{
            backgroundImage: `url(${Accueil})`,
            backgroundSize: "cover", // Ajuste l'image pour couvrir tout l'élément
            backgroundRepeat: "no-repeat", // Empêche la répétition
            backgroundPosition: "center", // Centre l'image
            height: "100%", // Définit une hauteur 
            width: "100%", // Largeur complète
        }}>
            <div className='container my-5'>
                <h1 className="text-white">Bienvenue sur mon site</h1>
                <button className="btn btn-primary mt-3">En savoir plus</button>
            </div>
        </div>
        <div className="container my-5">
            <div className="row shadow  g-3"> {/* Container article */}
                <div id="PartieGauche" className="px-4 col-12 col-md-6 d-flex flex-column"> {/* partie de gauche */}
                    <h1>Salut</h1>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus tortor quam odio feugiat nibh, aptent libero hendrerit? Convallis nascetur inceptos torquent bibendum donec risus. Conubia facilisis vivamus ipsum ipsum efficitur penatibus lacinia. Est eros litora malesuada purus consequat eros.</p>
                </div>
                <div id="PartieDroite" className="d-flex align-items-center flex-column responsive-width" >  {/* partie de droite */}
                    <div style={{
                        backgroundImage: `url(${Bureau})`,
                        backgroundPosition: "center", // Centre l'image
                        backgroundRepeat: "no-repeat", // Empêche la répétition
                        backgroundSize: "cover", // Ajuste l'image pour couvrir tout le conteneur
                        height: "30em",
                        width: "100%"
                        }}>
                    </div>   
                    <h1>Mes Acquis</h1>

                    {/* Barre de progression 1 */}
                    <div className="BarProgression bar-container mb-3">
                        <label>Compétence 1</label>
                        <div className="bar-background">
                            <div className="Competence1 bar" style={{ width: "70%" }}></div>
                        </div>
                        <span>70%</span>
                    </div>

                    {/* Barre de progression 2 */}
                    <div className="BarProgression bar-container mb-3">
                        <label>Compétence 2</label>
                        <div className="bar-background">
                            <div className="Competence2 bar" style={{ width: "85%" }}></div>
                        </div>
                        <span>85%</span>
                    </div>

                    {/* Barre de progression 3 */}
                    <div className="BarProgression bar-container mb-3">
                        <label>Compétence 3</label>
                        <div className="bar-background">
                            <div className="Competence3 bar" style={{ width: "50%" }}></div>
                        </div>
                        <span>50%</span>
                    </div>

                    {/* Barre de progression 4 */}
                    <div className="BarProgression bar-container mb-3">
                        <label>Compétence 4</label>
                        <div className="bar-background">
                            <div className="Competence4 bar" style={{ width: "90%" }}></div>
                        </div>
                        <span>90%</span>
                    </div>

                    {/* Barre de progression 5 */}
                    <div className="BarProgression bar-container mb-3">
                        <label>Compétence 5</label>
                        <div className="bar-background">
                            <div className="Competence5 bar" style={{ width: "65%" }}></div>
                        </div>
                        <span>65%</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Home;