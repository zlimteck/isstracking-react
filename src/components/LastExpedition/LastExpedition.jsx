import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './LastExpedition.css'

function LastExpedition() {
    const [lastexpedition, setExpedition] = useState({}); //Création d'un state pour l'expédition

    useEffect(() => {
      axios
        .get('https://api.isstracking.xyz/v1/expeditions')
        .then(response => {
          const lastExpedition = response.data[response.data.length - 1]; //Récupère la dernière expédition
          setExpedition(lastExpedition);
        })
        .catch(error => {
          console.log(error);
        });
    }, []); //[] permet de ne pas relancer la requête à chaque fois que le state change

    //Convertie les dates en français
    const dateStart = new Date(lastexpedition.date_start);
    const dateEnd = new Date(lastexpedition.date_end);
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const baseImageUrl = 'https://api.isstracking.xyz/v1/expeditions/images/';
    const patchImageUrl = lastexpedition.patch_expedition? `${baseImageUrl}${lastexpedition.patch_expedition}`: null;
    lastexpedition.date_start_fr = dateStart.getDate() + " " + monthNames[dateStart.getMonth()] + " " + dateStart.getFullYear();
    lastexpedition.date_end_fr = dateEnd.getDate() + " " + monthNames[dateEnd.getMonth()] + " " + dateEnd.getFullYear();


    //Affiche chargement avant d'avoir les données
    if (!lastexpedition.name_expedition) {
        return <div className="Last_expedition_loading">Chargement des données...</div>
    }
  
    return (
        <div className="Last_expedtion_container">
            <div className="Last_expedition_img">
                <img className="Last_expedtion_patch" src={patchImageUrl} alt={`Expedition ${lastexpedition.name_expedition} Patch`}/>
            </div>
            <div className="Last_expedition_text">
                <Link className="Last_expedition_link" to={`/expeditions/${lastexpedition.number_expedition}`}>
                    <h2 className="Last_expedition_title">{lastexpedition.name_expedition}</h2>
                </Link>
                <p className="Last_expedition_date"><strong>Date de début:</strong> {lastexpedition.date_start_fr.replace('NaN undefined NaN', 'Information non disponible')}</p>
                <p className="Last_expedition_date"><strong>Date de fin:</strong> {lastexpedition.date_end_fr.replace('NaN undefined NaN', 'Information non disponible')}</p>
            </div>
        </div>
    );
  }
  
  export default LastExpedition;
  
  
  
  
  