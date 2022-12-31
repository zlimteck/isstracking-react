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
    //Convertir le timestamp en date
    const date = new Date(issData.timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    const daylight = date.getHours() >= 6 && date.getHours() <= 18;

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