import './ExpeditionData.css';

function ExpeditionData ({title, patch, datestart, datend, shipstarting, shipreturning, totaltime}) {
    return (
        <section className="expedition_infos">
            <h1 className="expedition_title">{title}</h1>
            <img className="expedition_patch" src={patch} alt="Expedition Patch"/>
            <div className="expedition_date">
                <h3 className="expedition_date_title">Date de lancement:</h3>
                <p className="expedition_date_text">{datestart}</p>
                <h3 className="expedition_date_title">Date de retour:</h3>
                <p className="expedition_date_text">{datend}</p>
                <h3 className="expedition_date_title">Durée de l'expédition:</h3>
                <p className="expedition_date_text">{totaltime}</p>
            </div>
            <div className="expedition_ship">
                <h3 className="expedition_ship_title">Navette(s) de départ:</h3>
                <p className="expedition_ship_text">{shipstarting}</p>
                <h3 className="expedition_ship_title">Navette(s) de retour:</h3>
                <p className="expedition_ship_text">{shipreturning}</p>
            </div>
        </section>
    )
}

export default ExpeditionData;