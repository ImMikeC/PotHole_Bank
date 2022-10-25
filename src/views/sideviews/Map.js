import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { sendor } from "../../data/sensor";
import "../../styles/Map.css";

const Map = () => {
  const position = [-70.648, -33.45];
  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sendor.sensors.length > 0 &&
        sendor.sensors.map((park, index) => (
          <Marker
            key={index}
            position={[parseFloat(park.Long), parseFloat(park.Lat)]}
          >
            <Popup>
              {park.data.title} <br /> {park.data.description}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
