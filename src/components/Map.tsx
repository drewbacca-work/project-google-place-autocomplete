import { GoogleMap, MarkerF } from "@react-google-maps/api";
import React from "react";
import { useAppSelector } from "../hooks";
import "../styles/Map.css";

const Map = () => {
  const mapLatLng = useAppSelector((state) => state.map.mapLatLng);

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      zoom={10}
      center={mapLatLng}
    >
      <MarkerF position={mapLatLng} />
    </GoogleMap>
  );
};

export default Map;
