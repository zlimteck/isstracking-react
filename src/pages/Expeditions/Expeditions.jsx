import './Expeditions.css';
import Card from '../../components/Card/Card';
import LastExpedition from '../../components/LastExpedition/LastExpedition';
import Collapse from '../../components/Collapse/Collapse';

function Missions() {
    return (
        <div className="Expeditions">
            <Collapse
                title={`Expedition en cours`}
                texte= {<LastExpedition />}
            />
            <Card />
        </div>
    );
}

export default Missions;