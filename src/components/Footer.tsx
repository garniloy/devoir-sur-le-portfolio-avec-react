import { Link } from "react-router"

function Footer() {
    return(
       
        <footer className="bg-dark" >
            
            <div className="col">
                <p className="footer-col-title">John Doe</p>
                <p className="footer-col-item">40 rue Laure Diebold</p>
                <p className="footer-col-item">69009 Lyon, France</p>
                <p className="footer-col-item">10 20 30 40 50</p>
                <p className="footer-col-item">john.doe@gmail.com</p>
                <div className="social-network">
                    <a className="text-white" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <i className="socil-network-item bi bi-github fs-1" />
                    </a>
                    <a className="text-white" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="socil-network-item bi bi-twitter fs-1" />
                    </a>
                    <a className="text-white" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="socil-network-item bi bi-linkedin fs-1" />
                    </a>
                </div>
            </div>
            <div className="col">
                <p className="footer-col-title">Liens utiles</p>
                <div className="liens">
                    <Link to="/" className="text-white footer-col-item">Accueil</Link>
                    <Link to="/services" className="text-white footer-col-item">Service</Link>
                    <Link to="/realisations" className="text-white footer-col-item">Portfolio</Link>
                    <Link to="/contact" className="text-white footer-col-item">Contact</Link>
                    <Link to="/mentions" className="text-white footer-col-item">Mentions légales</Link>
                </div>
            </div>
            <div className="col rea-col">
                <p className="footer-col-title text-white">Mes réalisations</p>
                <Link to="/realisations" className="footer-col-item text-white">Fresh Food</Link>
                <Link to="/realisations" className="footer-col-item text-white">Restaurant Akira</Link>
                <Link to="/realisations" className="footer-col-item text-white">Espace bien-etre</Link>
                <Link to="/realisations" className="footer-col-item text-white">SEO</Link>
                <Link to="/realisations" className="footer-col-item text-white">Creation d'une API</Link>
                <Link to="/realisations" className="footer-col-item text-white">Maquette d'un site</Link>
            </div>
            
        </footer>
        
    )
}

export default Footer