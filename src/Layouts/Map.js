import * as React from "react";
import { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ReactMapGL, { Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGVtb2xsZXQiLCJhIjoiY2trdnZqbnFoMGVkeTJ1cDc3YjR6NzZzZiJ9.MKI8YLjhkh_R_GeS6FkVcA";

export default function Map() {
  const classes = useStyles();
  const [showPopup, togglePopup] = React.useState(false);
  const [latitude, setLatitude] = React.useState(19.4978);
  const [longitude, setLongitude] = React.useState(-99.1269);
  const [name, setName] = React.useState("");
  const [index, setIndex] = React.useState(null);
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 19.4978,
    longitude: -99.1269,
    zoom: 4,
  });

  const candidateLocation = (candidato, i) => {
    togglePopup(true);
    setLatitude(candidato.latitude);
    setLongitude(candidato.longitude);
    setName(candidato.name);
    setIndex(i);
    setViewport({
      ...viewport,
      latitude: candidato.latitude,
      longitude: candidato.longitude,
    });
  };

  return (
    <Box display="flex" style={{ paddingLeft: 140 }}>
      <Box style={{ width: "30%", padding: 15 }}>
        {candidatos.map((candidato, i) => (
          <Box
            display="flex"
            justifyContent="space-between"
            onClick={() => candidateLocation(candidato, i)}
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottom: "2px solid white",
              cursor: "pointer",
              backgroundColor: i === index && "#323C4A",
            }}
          >
            <Box>
              <Typography className={classes.leftInfoLight}>
                {candidato.industry}
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "#CECECE",
                }}
              >
                {candidato.name}
              </Typography>
              <Typography className={classes.leftInfoLight}>
                {candidato.rol}
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.rightInfo}>
                {candidato.city}
              </Typography>
              <Typography className={classes.rightInfo}>
                {candidato.postalCode}
              </Typography>
              <Typography className={classes.rightInfo}>
                {candidato.phone}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box style={{ width: "70%" }}>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          width="100%"
          height="92vh"
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {showPopup && (
            <Popup
              latitude={latitude}
              longitude={longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => togglePopup(false)}
              className={classes.popup}
              anchor="top"
              focusAfterOpen={true}
            >
              <div>
                <Typography>{name}</Typography>
              </div>
            </Popup>
          )}
        </ReactMapGL>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  rightInfo: {
    textAlign: "end",
    color: "white",
    fontWeight: "lighter",
  },
  leftInfoLight: {
    color: "white",
    fontWeight: "lighter",
    fontSize: 14,
    color: "#ffffff",
  },
  popup: {
    color: "#4056F4",
  },
}));

const candidatos = [
  {
    name: "Samantha Wong",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "México",
    postalCode: 54789,
    latitude: 19.4978,
    longitude: -99.1269,
  },
  {
    name: "Moy Macias",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "Guadalajara",
    postalCode: 54789,
    latitude: 20.6736,
    longitude: -103.344,
  },
  {
    name: "Ali Malik",
    rol: "Truss Designer",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "Monterrey",
    postalCode: 54789,
    latitude: 25.6714,
    longitude: -100.309,
  },
  {
    name: "Ana Jackson",
    rol: "Building Analyst",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "León",
    postalCode: 54789,
    latitude: 21.1236,
    longitude: -101.68,
  },
  {
    name: "Michael Nichols",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "México",
    postalCode: 54789,
    latitude: 19.4978,
    longitude: -99.1269,
  },
  {
    name: "Will Smith",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "Guadalajara",
    postalCode: 54789,
    latitude: 20.6736,
    longitude: -103.344,
  },
  {
    name: "Steve Jobs",
    rol: "Truss Designer",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
    city: "Monterrey",
    postalCode: 54789,
    latitude: 25.6714,
    longitude: -100.309,
  },
];
