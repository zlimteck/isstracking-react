import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import icon from '../../assets/iss.png';

const ISSMarker = L.icon({
    iconUrl: icon,
    iconSize: [20, 20],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

function Map () {
    const [issPosition, setISSPosition] = React.useState({ lat: 0, lng: 0 });
    React.useEffect(() => {
        const getISSPosition = async () => {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        setISSPosition({ lat: data.latitude, lng: data.longitude });
    };
    getISSPosition();
    const interval = setInterval(getISSPosition, 3000);
    return () => clearInterval(interval);
}, []);

return (
    <section className="Map">
        <MapContainer className="Map_container" center={issPosition} zoom={2} scrollWheelZoom={false}>
            <TileLayer 
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            accessToken='sk.eyJ1IjoiZ3JpbXoiLCJhIjoiY2xjODUyaDhtMWcwazNwbW85c3cyNHZvbyJ9.x_ix8uMGwpehI_zqkz45sA'
            id="mapbox/streets-v11"
            />
            <Marker position={issPosition} icon={ISSMarker} />
        </MapContainer>
    </section>
    );
};

export default Map;