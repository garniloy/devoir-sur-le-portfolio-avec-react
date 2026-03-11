import johnDoe from "../assets/images/john-doe-about.jpg"
import "./pages.css"
import Users from "../components/Modale"
import { useEffect, useState } from "react"

function Home() {
    const jdimage = johnDoe

    useEffect(() => {
        document.title = "Acceuil - John Doe";
    }, []);

    const [showModal, setShowModal] = useState(false);

    return(
        <main>

            {showModal && (
                <div className="overley bg-dark">
                    <Users onClose={()=>{setShowModal(false)}}/>
                </div>
            )}

            
            <div className="fond text-center px-3">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Developpeur web full stack</h2>

                <button
                    className="btn btn-danger"
                    onClick={() => setShowModal(true)}
                >
                    en savoir plus
                </button>
            </div>

           
            <div className="section-info container py-5">

                <div className="row g-4">

                    
                    <div className="a-propos col-12 col-md-6">

                        <h2>A propos</h2>

                        <img
                            src={jdimage}
                            alt="john doe about"
                            className="profil img-fluid"
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque ligula ipsum, tristique sed tortor vel, finibus congue ligula. Vivamus consectetur massa. Morbi id erat erat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque ligula ipsum, tristique sed tortor vel, finibus congue ligula. Vivamus consectetur massa. Morbi id erat erat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque ligula ipsum, tristique sed tortor vel, finibus congue ligula. Vivamus consectetur massa. Morbi id erat erat.
                        </p>

                    </div>

                    
                    <div className="mes-competences col-12 col-md-6">

                        <h2>Mes compétences</h2>

                        <ul className="competence-list list-unstyled">

                            <li>HTML5 90%
                                <div className="progress" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                                </div>
                            </li>

                            <li>CSS3 80%
                                <div className="progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
                                </div>
                            </li>

                            <li>JAVASCRIPT 75%
                                <div className="progress" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
                                </div>
                            </li>

                            <li>PHP 70%
                                <div className="progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                                </div>
                            </li>

                            <li>REACT 65%
                                <div className="progress" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-default" style={{ width: '50%' }}></div>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </main>
    )
}

export default Home