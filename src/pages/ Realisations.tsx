import './pages.css'
import banner from '../assets/images/banner.jpg'
import coder from '../assets/images/portfolio/coder.jpg'
import bienetre from '../assets/images/portfolio/espace-bien-etre.jpg'
import freshfood from '../assets/images/portfolio/fresh-food.jpg'
import restaurant from '../assets/images/portfolio/restaurant-japonais.jpg'
import screen from '../assets/images/portfolio/screens.jpg'
import seo from '../assets/images/portfolio/seo.jpg'

function Realisation() {
    return(
        <main>
            <img src={banner} alt="Bannière" className="baniere" />
            <h3 className='titre-de-page'>Portfolio</h3>
            <p className='sous-titre'>Voici quelques-une de mes réalisations.</p>
            <div className='separator bg-primary' ></div>
            <div className="mes-realisations">
                <div className="realisation">
                    <img className='image-realisation' src={freshfood} alt="Fresh Food" />
                    <h3 className="titre-realisation">Fresh Food</h3>
                    <p className="description-realisation">Site de vente de produits frais en ligne</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">Site réalisé avec PHP et MySQL</p>
                </div>
                <div className="realisation">
                    <img className='image-realisation' src={restaurant} alt="Restaurant Japonais" />
                    <h3 className="titre-realisation">Restaurant Akira</h3>
                    <p className="description-realisation">Site de vente d'un restaurant japonais</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">Site réalisé avec WordPress</p>
                </div>
                
                <div className="realisation">
                    <img className='image-realisation' src={bienetre} alt="Espace bien-être" />
                    <h3 className="titre-realisation">Espace bien-être</h3>
                    <p className="description-realisation">Site vitrine d'un salon de bien-être</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">Site réalisé avec LARAVEL</p>
                </div>
                <div className="realisation">
                    <img className='image-realisation' src={seo} alt="SEO" />
                    <h3 className="titre-realisation">SEO</h3>
                    <p className="description-realisation">Amélioration du référencement d'un site e-commerce</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">Utilisation des outils SEO</p>
                </div>
                <div className="realisation">
                    <img className='image-realisation' src={coder} alt="Coder" />
                    <h3 className="titre-realisation">Création d'une API</h3>
                    <p className="description-realisation">Création d'une API RESTFULL publique</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">PHP - SYMFONY</p>
                </div>
                
                <div className="realisation">
                    <img className='image-realisation' src={screen} alt="Screens" />
                    <h3 className="titre-realisation">Maquette d'un site web</h3>
                    <p className="description-realisation">Création du prototype d'un site web</p>
                    <button  className="btn btn-primary mb-3">Voir le site</button>
                    <p className="footer-realisation">Réalisé avec Figma</p>
                </div>
                
            </div>
        </main>
    )
}

export default Realisation