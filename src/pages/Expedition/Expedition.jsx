import ExpeditionsInfos from '../../data/expeditions.json';
import Error404 from '../Error/Error';
import { useParams } from 'react-router-dom';
import ExpeditionData from '../../components/ExpeditionData/ExpeditionData';
import Collapse from '../../components/Collapse/Collapse';
import './Expedition.css';


function Expeditions () {
    document.cookie = "SameSite=None; Secure";
    const params = useParams(); //
    const expeditions = 
    ExpeditionsInfos.find((expeditions) => params.id === expeditions.id); //
    if (expeditions===undefined) {
        return (
            <Error404 />
        )
    } 
    const key = expeditions.number_expedition;
    const name = expeditions.name_expedition;
    const patch = expeditions.patch_expedition;
    const date = expeditions.date_start + " au " + expeditions.date_end;
    //people et nationality sont dans le meme tableau mais dans des objets differents
    const people = expeditions.astronauts;
    const ship = expeditions.ship_starting + " - " + expeditions.ship_return;
    const picture = expeditions.picture_crew
    return (
        <section className="expedition">
            <div className="expeditions_infos">
                <ExpeditionData 
                key={key} 
                expeditions={expeditions} 
                title={name} 
                patch={patch} 
                date={date} 
                people={people} 
                ship={ship}
                picture={picture}
                />
            </div>
            <section className="collapse_astronautes">
                <Collapse
                title="Astronautes a bord"
                //Cherche le tableau astronauts dans le fichier json
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