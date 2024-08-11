import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MissionNavigation.css';

function MissionNavigation({ currentId, currentImage }) {
    const [previousExpedition, setPreviousExpedition] = useState(null);
    const [nextExpedition, setNextExpedition] = useState(null);

    const previousId = currentId - 1;
    const nextId = currentId + 1;
    const baseImageUrl = 'https://api.isstracking.xyz/v1/expeditions/images/';

    useEffect(() => {
        // Récupérer la mission précédente
        if (previousId > 0) {
            axios.get(`https://api.isstracking.xyz/v1/expeditions/${previousId}`)
                .then((response) => {
                    setPreviousExpedition(response.data);
                });
        }

        // Récupérer la mission suivante
        axios.get(`https://api.isstracking.xyz/v1/expeditions/${nextId}`)
            .then((response) => {
                setNextExpedition(response.data);
            });

    }, [previousId, nextId]);

    return (
        <div className="navigation-buttons">
            {previousExpedition && (
                <Link to={`/expeditions/${previousId}`} className="nav-button">
                    <img className="previous-button-image" src={`${baseImageUrl}${previousExpedition.patch_expedition}`} alt={`Mission ${previousExpedition.number_expedition}`} />
                    <span className='button-text'>{previousExpedition.number_expedition}</span>
                </Link>
            )}
            <div className="current-mission">
                <img 
                    className="current-button-image" 
                    src={currentImage}
                    alt={`Mission actuelle ${currentId}`} 
                />
                <span className='button-text-current'>{currentId}</span>
            </div>
            {nextExpedition && (
                <Link to={`/expeditions/${nextId}`} className="nav-button">
                    <img className="next-button-image" src={`${baseImageUrl}${nextExpedition.patch_expedition}`} alt={`Mission ${nextExpedition.number_expedition}`} />
                    <span className='button-text'>{nextExpedition.number_expedition}</span>
                </Link>
            )}
        </div>
    );
}

export default MissionNavigation;
