import { useEffect  } from "react";
import {useImmer} from "use-immer"
import "./modale.css"


function Users({onClose}: { onClose: () => void }) {
const [user, setUser] = useImmer({name:"",
location:"",bio:"",
public_repos:0,
followers:0,
following:0
});

  useEffect(() => {

    async function fetchUser() {
      try {
        const response = await fetch("https://api.github.com/users/github-john-doe");
        const data = await response.json();

        setUser(draft => {
          draft.name = data.name;
          draft.location = data.location;
          draft.bio = data.bio;
          draft.public_repos = data.public_repos;
          draft.followers = data.followers;
          draft.following = data.following;
        });

      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    }

    fetchUser();

  }, [setUser]);

  return(
    <div className="modale-box text-white">
      <div className="modale-header">
        <p>Mon profil GitHub</p>
        <button className="btnferhea text-white" onClick={onClose}>
          X
        </button>
      </div>
      <div className="modale-body">
        <img src="https://avatars.githubusercontent.com/u/19842736?v=4" alt="photo de profil" className="photo-profil" />
        <div className="details-du-profil">
          <div className="elt-detail">
            <i className="bi bi-person"/>
            <span> {user.name}</span>
          </div>
          <div className="elt-detail">
            <i className="bi bi-geo-alt"/>
            <span> {user.location}</span>
          </div>
          <div className="elt-detail">
            <i className="bi bi-card-text"/>
            <span> {user.bio}</span>
          </div>
          <div className="elt-detail">
            <i className="bi bi-box"/>
            <span> Repositories : {user.public_repos}</span>
          </div>
          <div className="elt-detail">
            <i className="bi bi-people"/>
            <span> Followers : {user.followers}</span>
          </div>
          <div className="elt-detail">
            <i className="bi bi-people"/>
            <span> Following : {user.following}</span>
          </div>
        </div>
      </div>
      <div className="modale-footer">
        <button  className="bbtnferfoo text-white" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  )

}

export default Users