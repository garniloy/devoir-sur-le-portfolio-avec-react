import './pages.css'
import banner from '../assets/images/banner.jpg'
function Services() {
    return(
        <main>
            <img src={banner} alt="Bannière" className="baniere" />
            <h3 className='titre-de-page'>Mon offre de services</h3>
            <p className='sous-titre'>Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className='separator bg-primary' ></div>

            <div className="list-de-service">
                <div className="service">
                    <i className="bi bi-brush text-primary fs-1"></i>
                    <h3 className="intitule">UX Designer</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Voluptas, voluptate.</p>
                </div>
                <div className="service">
                    <i className="bi bi-code-slash text-primary fs-1"></i>
                    <h3 className="intitule">Développeur Web</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="service">
                    <i className="bi bi-search text-primary fs-1"></i>
                    <h3 className="intitule">Référencement</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Voluptas, voluptate.</p>
                </div>
            </div>
        </main>
    )
}

export default Services