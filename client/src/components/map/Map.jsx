import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

export default function SriLankaMap({ mapData }) {
    const position = [6.9271, 79.8612];

    const mapStyle = {
        fillColor: "green",
        weight: 1,
        color: "black",
        fillOpacity: 0.3,
    };

    const onEachCity = (city, layer) => {
        const name1 = city.properties.description;
        layer.bindPopup(`${name1}`);
    };

    return (
        <MapContainer style={{ height: "100%", borderRadius:"10px" }} center={position} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
                style={mapStyle}
                data={mapData}
                onEachFeature={onEachCity}
            />
        </MapContainer>
    );
}
