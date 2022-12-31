import { useState } from "react";
import "./Collapse.css";
import Collapse_arrow from "../../assets/collapse_arrow.svg";

function Collapse({title, texte}) {
    const [etat, setEtat] = useState(false);

    return etat ? (
        <div className="collapse_container">
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow" src={Collapse_arrow} alt="Fleche de collapse" onClick={() => setEtat(false)}/>
            </div>
            <div className="collapse_texte">{texte}</div>
        </div>
    ) : (
        <div className="collapse_container">
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow_rot" src={Collapse_arrow} alt="Fleche de collapse" onClick={() => setEtat(true)}/>
            </div>
        </div>
    );
}

export default Collapse;