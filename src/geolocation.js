import "./leaflet.css";
import LocationMarker from "./livelocation.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useCallback,useMemo } from "react";
function Goelocation() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const fetchdata = useMemo(()=>async () => {
    let res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let response = await res.json();
    // console.log(response);
    const { latitude, longitude } = response;
    setLon(longitude);
    setLat(latitude);

    document.getElementById("lat").innerText = lat;
    document.getElementById("lon").innerText = lon;
    console.log(lat);
    console.log(lon);
  },[lat ,lon]);
  useEffect(() => {
    setInterval(
      fetchdata,1000);
  }, []);
  return (
    <div>
      <p>
        latitude: <span id="lat"></span>
      </p>
      <p>
        longitude: <span id="lon"></span>
      </p>

      <MapContainer
        center={[lat,lon]}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat,lon]}>
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
