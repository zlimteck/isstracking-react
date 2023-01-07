// Image svg d'une fusée
import rocket from "../../assets/rocket.svg";
import "./Error404.css";

function Error() {
    return (
        <section className="Error404">
            <div className="error_content">
                <div className="lost_rocket">
                    <img className="error_rocket" src={rocket} alt="rocket de la page erreur 404"/>
                </div>
                <h1 className="error_title"> Erreur 404</h1>
                <h2 className="error_description">Oups il semblerait que votre fusée se soit égarée</h2>
                <p className="error_redirection">Reviens en arriere: <a href="/">Acceuil</a>.</p>
            </div>
        </section>
    );
}
export default Error;
