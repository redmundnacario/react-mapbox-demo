import React, { useState } from "react";
import ReactMapboxGL, { Marker } from "react-mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import data from "../data.json";

const ReactMapboxGLComponent = ReactMapboxGL({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN ?? "hello",
});

const Map = () => {
  const [center, setCenter] = useState<[number, number]>([121.774, 12.8797]);
  const [zoom, setZoom] = useState<[number]>([5]);
  console.log(data);

  const markers = data.map((marker, index) => {
    return (
      <Marker
        key={index}
        tabIndex={index}
        coordinates={[marker.CLongitude, marker.CLatitude]}
        anchor="center"
      >
        <img src={`${marker.Category}.png`} alt="" />
      </Marker>
    );
  });

  return (
    <ReactMapboxGLComponent
      center={center}
      zoom={zoom}
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
      style={"mapbox://styles/redmund/cl5i0zt6t00ez15qvwwmlyrlg"}
    >
      {markers}
    </ReactMapboxGLComponent>
  );
};

export default Map;
