import axios from 'axios';
import Error404 from '../Error404/Error404';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExpeditionData from '../../components/ExpeditionData/ExpeditionData';
import Collapse from '../../components/Collapse/Collapse';
import './Expedition.css';

function Expeditions () {
    document.cookie = "SameSite=None; Secure";
    const params = useParams();
    const [expedition, setExpedition] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        axios.get(`https://api.isstracking.xyz/v1/expeditions/${params.id}`)
        .then((response) => {
            setExpedition(response.data);
        })
        .catch((error) => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [params.id]);

    if (isError) {
        return <Error404 />;
    }
    if (isLoading) {
        return <div className="loading">Chargement des données...</div>;
    }
    
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    //recupere les dates dans le tableau et les transforme en dates en français les tableau peuvent contenir plusieurs dates
    expedition.date_start_fr = expedition.date_start.map((date) => {
        const dateStart = new Date(date);
        return dateStart.getDate() + " " + monthNames[dateStart.getMonth()] + " " + dateStart.getFullYear();
    });
    expedition.date_end_fr = expedition.date_end.map((date) => {
        const dateEnd = new Date(date);
        return dateEnd.getDate() + " " + monthNames[dateEnd.getMonth()] + " " + dateEnd.getFullYear();
    });
    const defaultValue = 'Inconnu';
    const key = expedition.number_expedition;
    const name = expedition.name_expedition;
    const patch = expedition.patch_expedition;
    const datestart = expedition.date_start_fr.join(" , ");
    const datend = expedition.date_end_fr.join(" , ");
    const people = expedition.astronauts;
    const shipstarting = expedition.ship_starting.join(" - ");
    const shipreturning = expedition.ship_return.join(" - ");
    const picture = expedition.picture_crew;
    const totaltime = expedition.total_time.replace('days', 'jours') || defaultValue;
    const astronautsnumber = expedition.astronauts_number;

    return (
        <section className="expedition">
            <div className="expeditions_infos">
                <ExpeditionData
                key={key} 
                expeditions={expedition} 
                title={name}
                patch={patch} 
                datestart={datestart}
                datend={datend}
                people={people}
                shipstarting={shipstarting}
                shipreturning={shipreturning}
                picture={picture}
                totaltime={totaltime}
                astronautsnumber={astronautsnumber}
                />
            </div>
            <section className="collapse_astronautes">
                <Collapse
                title={`Astronautes a bord: (${astronautsnumber})`}
                texte={people.map((astronauts, list) => (
                    <li key={list} className="list_astronauts">{astronauts}</li>
                ))}
                />
            </section>
            <section className="collapse_crew">
                <img className="crew_picture" src={picture} alt="Crew"/>
            </section>
        </section>
    )
}

export default Expeditions;