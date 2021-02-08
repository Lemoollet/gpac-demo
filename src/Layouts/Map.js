import React from "react";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVtb2xsZXQiLCJhIjoiY2trdnZqbnFoMGVkeTJ1cDc3YjR6NzZzZiJ9.MKI8YLjhkh_R_GeS6FkVcA";

var map = new mapboxgl.Map({
  container: "mapa",
  style: "mapbox://styles/mapbox/streets-v11",
});

export default function Map() {
  return <div id="mapa"></div>;
}
