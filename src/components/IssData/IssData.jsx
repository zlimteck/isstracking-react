import './IssData.css';
import React from 'react';


function IssData() {
    const [issData, setISSDATA] = React.useState({});
    React.useEffect(() => {
        const getISSDATA = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            setISSDATA(data);
        };
        getISSDATA();
        const interval = setInterval(getISSDATA, 3000);
        return () => clearInterval(interval);
    }, []);
    //Calcule la date (heure et jour) en foncrion de la position de l'ISS
    const date = new Date(issData.timestamp * 1000);
    const formattedTime = date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const daylight = issData.visibility === 'daylight';
    return (
        <section className='Iss_informations'>
            <div className='iss_data'>
                <div className='iss_longitude'>
                    <p>Longitude:</p>
                    <p>{issData.longitude}</p>
                </div>
                <div className='iss_latitude'>
                    <p>Latitude:</p>
                    <p>{issData.latitude}</p>
                </div>
                <div className='iss_altitude'>
                    <p>Altitude:</p>
                    <p>{issData.altitude}</p>
                </div>
                <div className='iss_velocity'>
                    <p>Vitesse:</p>
                    <p>{issData.velocity}</p>
                </div>
                <div className='iss_daily'>
                    <p>Date:</p>
                    <p>{formattedTime}</p>
                </div>
                <div className='iss_visibility'>
                    <p>Visibilité:</p>
                    <p>{daylight ? 'Jour' : 'Nuit'}</p>
                </div>
            </div>
        </section>
    );
};

export default IssData;