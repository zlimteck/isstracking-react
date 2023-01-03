import { Link } from 'react-router-dom';
import { useState } from "react";
import Expeditions from '../../data/expeditions.json';
import './Card.css';

//Gere l'erreur samesite cookie
document.cookie = "SameSite=None; Secure";

function Card(){
    const [ expeditions ] = useState(Expeditions);
    return (
        <section className="gallery">
            {expeditions.map((expedition) => (
                <Link to={`/Expeditions/${expedition.id}`} key={expedition.id} className="card_link">
                    <div className="card_container">
                        <img className="card_img" src={expedition.patch_expedition} alt="Expedition Patch"/>
                    </div>
                    <div className="card_title">
                        <strong>{expedition.name_expedition}</strong>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default Card;