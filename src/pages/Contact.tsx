import './pages.css'



function Contact() {
    return(
        <main>
            <h3 className='titre-de-page'>Contact</h3>
            <p className='sous-titre'>Pour me contacter en vue d'un entretien ou  d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className='separator bg-primary' ></div>
            <div className="section-info">
                <div className="formulaire">
                    <h2>Formulaire de contact</h2>
                    <form action="post">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre nom" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre adresse email" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre numéro de téléphone" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Sujet" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Votre message' rows={10}></textarea>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Envoyer</button>
                        </div>
                    </form>
                </div>
                <div className="info-de-contact">
                    <h2>Mes coordonnées</h2>
                    <p className="nom-de-profil">John Doe</p>
                    <div className="details-items">
                        <i className="bi bi-people fs-6"></i>
                        <span> 40 rue Laure Diebold</span>
                    </div>
                    <div className="details-items">
                        <i className="bi bi-box fs-6"></i>
                        <span> 69009 Lyon France </span>
                    </div>
                    <div className="details-items">
                        <i className="bi bi-people fs-6"></i>
                        <span> 10 20 30 40 50</span>
                    </div>
                    <div className="details-items">
                        <i className="bi bi-people fs-6"></i>
                        <span> john.doe@gmail.com </span>
                    </div>
                    <div className="map-rendering">
                        <iframe
                            src="https://maps.google.com/maps?q=40 rue Laure Diebold Lyon&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact