import "./leaflet.css"
import {MapContainer,TileLayer, useMap,Marker,Popup} from "react-leaflet";

import React from "react";

function Leaflet() {
  return <div ><MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer></div>;
}

export default Leaflet;
