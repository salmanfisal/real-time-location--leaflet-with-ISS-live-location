import "./leaflet.css";
import LocationMarker from "./livelocation.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useCallback } from "react";
function Goelocation() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const fetchdata = useCallback(async () => {
    let res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let response = await res.json();
    // console.log(response);
    const { latitude, longitude } = response;
    setLon(longitude);
    setLat(latitude);
    console.log(lat);
    console.log(lon);
  }, [lat, lon]);
  useEffect(() => {
    setInterval(fetchdata, 10000);
  }, []);
  return (
    <div>
      {lat && lon ? (
        <>
          {" "}
          <p>
            {" "}
            latitude: <span id="lat">{lat}</span>
          </p>
          <p>
            longitude: <span id="lon">{lon}</span>
          </p>
        </>
      ) : (
        "Fetching Data...."
      )}

      <MapContainer center={[lat, lon]} zoom={2} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
}

export default Goelocation;
