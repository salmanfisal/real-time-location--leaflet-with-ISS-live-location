import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./chart.js";
import Home from "./home.js";
import Geolocation from "./geolocation.js";
import Leaflet from "./leaflet.js";

function App() {
  return (
    <div className="App">
      <Geolocation />
      {/* <Leaflet/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
