import './IssData.css';
import React from 'react';

async function getTimeZone(latitude, longitude, timestamp) {
    const apiKey = '92SLH9NNBTYL';
    const timeZoneApiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}&time=${timestamp}`;
    const response = await fetch(timeZoneApiUrl);
    const timeZoneData = await response.json();
    return timeZoneData.zoneName;
}

function IssData() {
    const [issData, setISSDATA] = React.useState({});
    const [formattedDateTime, setFormattedDateTime] = React.useState('');
    React.useEffect(() => {
        const getISSDATA = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            //Deternine le fuseau horaire de l'ISS
            const timeZone = await getTimeZone(data.latitude, data.longitude, data.timestamp);
            const date = new Date(data.timestamp * 1000);
            const formattedDateTime = new Intl.DateTimeFormat('fr-FR', {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                timeZoneName: 'short'
            }).format(date);
            setFormattedDateTime(formattedDateTime);
            setISSDATA(data);
        };
        getISSDATA();
        const interval = setInterval(getISSDATA, 3000);
        return () => clearInterval(interval);
    }, []);
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
                    <p>{formattedDateTime}</p>
                </div>
                <div className='iss_visibility'>
                    <p>Visibilité:</p>
                    <p>{daylight ? 'Jour' : 'Nuit'}</p>
                </div>
            </div>
        </section>
    );
}

export default IssData;