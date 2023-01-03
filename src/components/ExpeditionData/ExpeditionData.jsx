import './ExpeditionData.css';

function ExpeditionData ({mission, title, patch, date, people, ship}) {
    return (
        <section className="expedition_infos">
            <h2 className="expedition_title">{title}</h2>
            <img className="expedition_patch" src={patch} alt="Expedition Patch"/>
            <div className="expedition_date">
                <h3 className="expedition_date_title">Date de l'expedition:</h3>
                <p className="expedition_date_text">{date}</p>
            </div>
            <div className="expedition_ship">
                <h3 className="expedition_ship_title">Navette d'arrivé et de départ: </h3>
                <p className="expedition_ship_title">{ship}</p>
            </div>
        </section>
    )
}

export default ExpeditionData;