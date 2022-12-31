import ExpeditionsInfos from '../../data/missions.json';
import Error404 from '../../pages/Error/Error';
import { useParams } from 'react-router-dom';
import ExpeditionData from '../../components/ExpeditionData/ExpeditionData';
import Collapse from '../../components/Collapse/Collapse';
import './Expeditions.css';


function Expeditions () {
    document.cookie = "SameSite=None; Secure";
    const params = useParams(); //
    const missions = 
    ExpeditionsInfos.find((missions) => params.id === missions.id); //
    if (missions===undefined) {
        return (
            <Error404 />
        )
    } 
    const key = missions.id;
    const name = missions.name_expedition;
    const patch = missions.patch_expedition;
    const date = missions.date_start + " au " + missions.date_end;
    //people et nationality sont dans le meme tableau mais dans des objets differents
    const people = missions.astronauts;
    const ship = missions.ship;
    const picture = missions.picture_crew
    return (
        <section className="expedition">
            <div className="expeditions_infos">
                <ExpeditionData 
                key={key} 
                missions={missions} 
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