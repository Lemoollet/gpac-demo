import React, { useEffect } from "react";
import axios from "axios";
import {
  FiberManualRecord,
  AddCircleOutline,
  ArrowBackIos,
} from "@material-ui/icons";
import {
  Button,
  Box,
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Modal,
  Backdrop,
  TextField,
  withStyles,
} from "@material-ui/core";

import test from "../images/test.jpeg";
import { appId, parseURL } from "../config/variables";

export default function Director() {
  const classes = useStyles();

  const [rowsCoach, setRowsCoach] = React.useState([]);
  const [rowsRecluter, setRowsRecluter] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    getCoach();
    getRecluters();
    getCandidates();
  }, []);

  const getCoach = () => {
    axios
      .get(`${parseURL}classes/Coach?include=director`, {
        headers: {
          "X-Parse-Application-Id": appId,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setRowsCoach(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecluters = () => {
    axios
      .get(`${parseURL}classes/Reclutador?include=coach`, {
        headers: {
          "X-Parse-Application-Id": appId,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setRowsRecluter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getCandidates = () => {
    axios
      .get(`${parseURL}classes/Candidato?include=reclutador`, {
        headers: {
          "X-Parse-Application-Id": appId,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setRows(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ paddingLeft: 140 }}>
      <div style={{ marginTop: 37, marginRight: 40, marginLeft: 50 }}>
        <Box display="flex" alignItems="center">
          <FiberManualRecord style={{ color: "#FD3939", marginRight: 8 }} />
          <Typography variant="h5" style={{ color: "white" }}>
            Coaches
          </Typography>
        </Box>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ color: "white", paddingLeft: 70 }}
                >
                  Name
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Phone
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Email
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Location
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Salary
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Director
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsCoach.map((row, i) => (
                <TableRow
                  key={i}
                  hover={true}
                  style={{
                    border: "10px solid #24292E",
                    backgroundColor: "#34343C",
                    position: "relative",
                  }}
                >
                  <TableCell
                    align="left"
                    size="small"
                    padding="none"
                    style={{ zIndex: 8, paddingLeft: -10 }}
                  >
                    <Box display="flex" style={{ zIndex: 9 }}>
                      <Avatar
                        style={{ marginRight: 10 }}
                        className={classes.large}
                        alt="Remy Sharp"
                        src={test}
                      />
                      <Box>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#CECECE",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography className={classes.lightText}>
                          Construction Manager
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.location}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {`$${row.wishSalary} MXN`}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.director.Name}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="outlined"
                      className={classes.lightText}
                    >
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: 37, marginRight: 40, marginLeft: 50 }}>
        <Box display="flex" alignItems="center">
          <FiberManualRecord style={{ color: "#FD3939", marginRight: 8 }} />
          <Typography variant="h5" style={{ color: "white" }}>
            Recruiters
          </Typography>
        </Box>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ color: "white", paddingLeft: 70 }}
                >
                  Name
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Phone
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Email
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Location
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Salary
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Coach
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsRecluter.map((row, i) => (
                <TableRow
                  key={i}
                  hover={true}
                  style={{
                    border: "10px solid #24292E",
                    backgroundColor: "#34343C",
                    position: "relative",
                  }}
                >
                  <TableCell
                    align="left"
                    size="small"
                    padding="none"
                    style={{ zIndex: 8, paddingLeft: -10 }}
                  >
                    <Box display="flex" style={{ zIndex: 9 }}>
                      <Avatar
                        style={{ marginRight: 10 }}
                        className={classes.large}
                        alt="Remy Sharp"
                        src={test}
                      />
                      <Box>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#CECECE",
                          }}
                        >
                          {row.Name}
                        </Typography>
                        <Typography className={classes.lightText}>
                          Construction Manager
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.location}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {`$${row.wishSalary} MXN`}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.coach.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="outlined"
                      className={classes.lightText}
                    >
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: 37, marginRight: 40, marginLeft: 50 }}>
        <Box display="flex" alignItems="center">
          <FiberManualRecord style={{ color: "#FD3939", marginRight: 8 }} />
          <Typography variant="h5" style={{ color: "white" }}>
            Candidates
          </Typography>
        </Box>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ color: "white", paddingLeft: 70 }}
                >
                  Name
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Phone
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Email
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Location
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Wish Salary
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Recruiter
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  hover={true}
                  style={{
                    border: "10px solid #24292E",
                    backgroundColor: "#34343C",
                    position: "relative",
                  }}
                >
                  <TableCell
                    align="left"
                    size="small"
                    padding="none"
                    style={{ zIndex: 8, paddingLeft: -10 }}
                  >
                    <Box display="flex" style={{ zIndex: 9 }}>
                      <Avatar
                        style={{ marginRight: 10 }}
                        className={classes.large}
                        alt="Remy Sharp"
                        src={test}
                      />
                      <Box>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#CECECE",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography className={classes.lightText}>
                          Construction Manager
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.location}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {`$${row.wishSalary} MXN`}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.lightText}>
                      {row.reclutador.Name}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="outlined"
                      className={classes.lightText}
                    >
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: "#1A1C21",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  lightText: {
    fontWeight: "lighter",
    fontSize: 10,
    color: "#CECECE",
  },
  margin: {
    marginTop: 25,
  },
}));
