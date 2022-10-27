import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Autocomplete from "react-google-autocomplete";
import saveImg from "../../helper/saveImg";
import { sendor } from "../../data/sensor";
import "../../styles/Map.css";

const Map = () => {
  const position = [-33.451, -70.64];

  const [marker, setMarker] = useState(sendor);
  const [location, setLocation] = useState({});
  const [change, setChange] = useState();
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [disablebButton, setDisabledButton] = useState(true);

  const saveReport = () => {
    location.data.description = change;
    location.data.title = title;
    location.data.url = img;
    console.log(location);
    console.log(".......", img);
    const newMarker = [...marker.sensors, location];
    const arraySendor = {
      sensors: newMarker,
    };
    setMarker(arraySendor);
  };

  useEffect(() => {
    console.log("mmmm", marker);
  }, []);

  const changeInput = (event) => {
    setChange(event.target.value);
    console.log(event.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const changeImg = async (e) => {
    console.log(e.target.files[0]);
    const { secure_url } = await saveImg(e.target.files[0]);
    setDisabledButton(false);
    console.log("aca estoy", secure_url);
    setImg(secure_url);
  };

  return (
    <div className="container-sm">
      <div className="d-flex justify-content-center">
        <div className="report col-4 p-4 mt-5 mx-4 bg-light border rounded-3">
          <div className="reportbox">
            <div className="mb-3 col">
              <Autocomplete
                className="form-control"
                apiKey={"AIzaSyBZKd9Y_ODlR1FJDtT-r3XVIL9o_Y6phWE"}                
                onPlaceSelected={(place) => {console.log(place.geometry.location.lat())
                  setLocation({
                    Lat: place.geometry.location
                      .lat()
                      .toString()
                      .substring(0, 6),
                    Long: place.geometry.location
                      .lng()
                      .toString()
                      .substring(0, 7),
                    data: {
                      status: "In progres",
                    },
                  })
                }}
                options={{
                  types: [],
                }}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={changeTitle}
                value={title}
                placeholder="Pothole Title"
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <div className="col mt-4">
              <label for="exampleFormControlTextarea1" className="form-label">
                Enter a comment for your report.
              </label>
              <textarea
                onChange={changeInput}
                value={change}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                maxlength="100"
              ></textarea>
            </div>
            <div className="col mt-4">
              <label for="formFile" class="form-label">
                Enter photo of your pothole.
              </label>
              <input
                onChange={changeImg}
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={saveReport}
              type="button"
              className="btn btn-primary mt-3"
              disabled={disablebButton}
            >
              Send Report
            </button>
          </div>
        </div>
        <div className="mapbox col-md-6 mt-5">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker.sensors.length > 0 &&
              marker.sensors.map((park, index) => (
                <Marker
                  key={index}
                  position={[parseFloat(park.Lat), parseFloat(park.Long)]}
                >
                  <Popup>
                    {park.data.title} <br /> {park.data.description}
                    <br />
                    status:{park.data.status} <br />
                    <img className="imagen" src={park.data.url} />
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
