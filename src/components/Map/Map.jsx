import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import icon from '../../assets/issdaylight.svg';
import icon1 from '../../assets/isseclipsed.svg';

const ISSMarkerdaylight = L.icon({
    iconUrl: icon,
    iconSize: [45, 45],
    iconAnchor: [25, 50], 
    popupAnchor: [0, -50]
});

const ISSMarkereclipsed = L.icon({
    iconUrl: icon1,
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

function Map () {
    const [issPosition, setISSPosition] = React.useState({ lat: 0, lng: 0 });
    const [issVisibility, setISSVisibility] = React.useState("daylight"); // ajout de la visibilité de l'ISS
    React.useEffect(() => {
        const getISSPosition = async () => {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        console.log(data);
        setISSPosition({ lat: data.latitude, lng: data.longitude });
        setISSVisibility(data.visibility); // mise à jour de la visibilité de l'ISS
    };
    getISSPosition();
    const interval = setInterval(getISSPosition, 3000);
    return () => clearInterval(interval);
}, []); // Convertir la visibilité en mètres

const goToISSPosition = () => {
    mapRef.current.setView(issPosition, 3);
  };

const mapRef = React.useRef();

return (
    <section className="Map">
        <MapContainer ref={mapRef} className="Map_container" center={issPosition} zoom={2} scrollWheelZoom={false}>
            <TileLayer 
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            accessToken='sk.eyJ1IjoiZ3JpbXoiLCJhIjoiY2xjODUyaDhtMWcwazNwbW85c3cyNHZvbyJ9.x_ix8uMGwpehI_zqkz45sA'
            id="mapbox/streets-v11"
            />
            {issVisibility === "daylight" ? (
                <Marker position={issPosition} icon={ISSMarkerdaylight}/>
            ) : (
                <Marker position={issPosition} icon={ISSMarkereclipsed}/>
            )}
        </MapContainer>
        <div className="Map_button">
            <button className="button" onClick={goToISSPosition}>Zoomer sur l'ISS</button>
        </div>
    </section>
    );
};

export default Map;