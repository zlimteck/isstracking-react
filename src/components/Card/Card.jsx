import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Card.css';
import axios from 'axios';

// Gère l'erreur samesite cookie
document.cookie = "SameSite=None; Secure";

function Card(){
    const [expeditions, setExpeditions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        axios.get('https://api.isstracking.xyz/v1/expeditions')
        .then((response) => {
            setExpeditions(response.data);
        })
        .catch((error) => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);
    return (
        <section className="gallery">
        {isLoading && <div className="loading">Chargement des données...</div>}
        {isError && <div className="error">Trop de requêtes. Veuillez réessayer plus tard.</div>}
        {!isLoading && !isError && expeditions.map((expedition) => (
            <Link to={`/Expeditions/${expedition.number_expedition}`} key={expedition.number_expedition} className="card_link">
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