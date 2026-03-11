import './pages.css'


function MentionsLegales() {
    return(
        <main>
            
            <h3 className='titre-de-page'>Mentions légales</h3>
            
            <div className='separator bg-primary' ></div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <p className="nom-de-profil">John Doe</p>
                        <div className="details-items">
                            <i className="bi bi-map"></i>
                            <span> 40 rue Laure Diebold</span>
                        </div>
                        <div className="details-items">
                            <i className="bi bi-geo-alt fs-6"></i>
                            <span> 69009 Lyon France </span>
                        </div>
                        <div className="details-items">
                            <i className="bi bi-phone fs-6"></i>
                            <span> 10 20 30 40 50</span>
                        </div>
                        <div className="details-items">
                            <i className="bi bi-envelope fs-6"></i>
                            <span> john.doe@gmail.com </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Hebergeur
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <h3>alwaysdata</h3>
                        <p>91 rue du Faubourg Saint-honore, 75008 Paris</p>
                        <i className="bi bi-globe2"></i>
                        <a href="https://alwaysdata.com" target="_blank" rel="noopener noreferrer"> www.alwaysdata.com</a>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Credit
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <p>Ce site a ete realise par John Doe, etudiant au <a href="https://www.centre-europeen-formation.fr">Centre Européen de Formation</a>.</p>
                        <p>Les images utilisées sur ce site sont libres de droits et proviennent de <a href="https://www.pixabay.com">Pixabay</a>.</p>
                        <p>le favicon de ce site a ete fourni par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">john-doe</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MentionsLegales