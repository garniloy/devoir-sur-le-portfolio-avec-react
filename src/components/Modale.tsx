import { useEffect, useState } from "react";
import "./modale.css"
import johnDoe from "../assets/images/john-doe-about.jpg"


function Users({onClose}: {onClose: () => void}) {
  const jdimage = johnDoe
  const [users, setUsers] = useState([{name:"", id:0}]);

  useEffect(() => {

    fetch("https://api.github.com/users/github-john-doe")
      .then(res => res.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div className="modal-overlay text-white">
      <div className="modal-container">

        <div className="modal-header">
          <p>Mon profil GitHub</p>
          <button className="header-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <img className="modal-body-item profile-picture" src={jdimage} alt="Profile Picture" />
          <div className="modal-body-item details-info">

            <div className="details-items">
              <i className="bi bi-person fs-6"></i>
              <span>{users[0]?.name || ""}</span>
            </div>
            <div className="details-items">
              <i className="bi bi-map fs-6"></i>
              <span>{users[0]?.name || "Utilisateur non trouvé"}</span>
            </div>
            <div className="details-items">
              <i className="bi bi-people fs-6"></i>
              <span>{users[0]?.name || "Utilisateur non trouvé"}</span>
            </div>
            <div className="details-items">
              <i className="bi bi-box fs-6"></i>
              <span> Repository : {users[0]?.name || "Utilisateur non trouvé"}</span>
            </div>
            <div className="details-items">
              <i className="bi bi-people fs-6"></i>
              <span> Followers : {users[0]?.name || "Utilisateur non trouvé"}</span>
            </div>
            <div className="details-items">
              <i className="bi bi-people fs-6"></i>
              <span> Following : {users[0]?.name || "Utilisateur non trouvé"}</span>
            </div>

          </div>
        </div>
        <div className="modal-footer">
          <button className="close-bton" onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
}

export default Users