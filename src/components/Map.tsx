import React, { useState } from "react";
import ReactMapboxGL from "react-mapbox-gl";

const ReactMapboxGLComponent = ReactMapboxGL({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN ?? "hello",
});

const Map = () => {
  const [center, setCenter] = useState<[number, number]>([121.774, 12.8797]);
  const [zoom, setZoom] = useState<[number]>([5]);

  return (
    <ReactMapboxGLComponent
      center={center}
      zoom={zoom}
      containerStyle={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
      style={"mapbox://styles/redmund/cl5i0zt6t00ez15qvwwmlyrlg"}
    ></ReactMapboxGLComponent>
  );
};

export default Map;
