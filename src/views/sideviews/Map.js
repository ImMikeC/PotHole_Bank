import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { sendor } from "../../data/sensor";
import "../../styles/Map.css";

const Map = () => {
  const position = [-33.451, -70.64];

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-3 mt-5">
        <div className="reportbox">
          <input></input>
        </div>
      </div>
      <div className="mapbox col-md-7 mt-5">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
                  <img src={park.data.url} />
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
