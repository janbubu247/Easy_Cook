import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom icon for the marker
const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Replace with your desired marker icon URL
    iconSize: [40, 40], // Adjust size as needed
    iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
});
const divIcon = L.divIcon({
    html: '<i class="fa fa-star"></i>',
    className: 'custom-fa-icon',
    iconSize: [20, 20]
});

const MapComponent = () => {
    const [position, setPosition] = useState(null);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        // Get user's current location
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);

            // Fetch nearby grocery stores using Kakao API
            fetchNearbyStores(latitude, longitude);
        });
    }, []);

    const fetchNearbyStores = async (latitude, longitude) => {
        const API_KEY = '0b8fcc5d28aef6be964ea5bb8787805b';  // Replace with your Kakao REST API Key
        const url = `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=MT1&x=${longitude}&y=${latitude}&radius=2000`;
        
        const response = await fetch(url, {
            headers: {
                Authorization: `KakaoAK ${API_KEY}`
            }
        });
        
        const data = await response.json();
        setStores(data.documents);
    };

    return (
        <div>
            <h1>Nearby Grocery Stores</h1>
            {position ? (
                <MapContainer center={position} zoom={15} style={{ height: "500px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                    {stores.map((store, index) => (
                        <Marker key={index} position={[store.y, store.x]} icon={customIcon}>
                            <Popup>{store.place_name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
};

export default MapComponent;
        