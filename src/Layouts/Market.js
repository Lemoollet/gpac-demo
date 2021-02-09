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

export default function Dashboard() {
  const classes = useStyles();

  const [modal, setModal] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);
  const [candidate, setCandidate] = React.useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    wishSalary: "",
    position: "",
  });

  useEffect(() => {
    getCandidates();
  }, [refresh]);

  const addNewTalent = () => {
    console.log(candidate);
    let params = candidate;
    axios
      .post(`${parseURL}classes/Candidato`, params, {
        headers: {
          "X-Parse-Application-Id": appId,
        },
      })
      .then((res) => {
        console.log(res.data);
        setModal(false);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCandidates = () => {
    let constraints = JSON.stringify({
      reclutador: {
        __type: "Pointer",
        className: "Reclutador",
        objectId: "dfdTuF62F3",
      },
    });
    axios
      .get(
        `${parseURL}classes/Candidato?include=reclutador&where=${constraints}`,
        {
          headers: {
            "X-Parse-Application-Id": appId,
          },
        }
      )
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{ marginTop: 37, paddingRight: 40, paddingLeft: 30 }}
      >
        <Box display="flex" alignItems="center">
          <FiberManualRecord style={{ color: "#FD3939", marginRight: 8 }} />
          <Typography variant="h5" style={{ color: "white" }}>
            See As Muñoz L.
          </Typography>
        </Box>
        <Button
          onClick={() => setModal(true)}
          size="small"
          variant="contained"
          endIcon={<AddCircleOutline />}
          style={{
            backgroundColor: "#4056F4",
            borderRadius: "2px",
            color: "white",
          }}
        >
          Add new talent
        </Button>
      </Box>
      <div style={{ marginTop: 37, marginRight: 40, marginLeft: 50 }}>
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
                      {row.wishSalary}
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
      <Modal
        style={{ overflow: "scroll" }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={modal}
        onClose={() => setModal(false)}
      >
        <div
          style={{
            margin: 50,
            padding: 50,
            backgroundColor: "#24292E",
          }}
        >
          <Box style={{ width: "100%", backgroundColor: "#20232B" }}>
            <Button
              onClick={() => setModal(false)}
              style={{ color: "white" }}
              startIcon={<ArrowBackIos style={{ color: "red" }} />}
            >
              Back
            </Button>
          </Box>
          <Box style={{ marginTop: 25 }}>
            <Box display="flex" alignItems="center">
              <FiberManualRecord style={{ color: "#FD3939", marginRight: 8 }} />
              <Typography variant="h5" style={{ color: "white" }}>
                New Talent
              </Typography>
            </Box>
          </Box>
          <Box display="flex" style={{ marginTop: 25 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ width: "30%" }}
            >
              <img
                alt="person"
                src={test}
                style={{ width: 176, height: 179, borderRadius: 120 }}
              />
              <Button
                onClick={addNewTalent}
                size="small"
                variant="contained"
                style={{
                  backgroundColor: "#4056F4",
                  borderRadius: 0,
                  width: "60%",
                  color: "white",
                  marginTop: 25,
                }}
              >
                Save as draft
              </Button>
              <Button
                size="small"
                variant="contained"
                style={{
                  backgroundColor: "#4056F4",
                  borderRadius: 0,
                  width: "60%",
                  color: "white",
                  marginTop: 25,
                }}
              >
                Save and send to coach
              </Button>
              <Button
                onClick={() => setModal(false)}
                size="small"
                variant="contained"
                style={{
                  backgroundColor: "transparent",
                  width: "60%",
                  border: "1px solid white",
                  borderRadius: 0,
                  color: "white",
                  marginTop: 25,
                }}
              >
                Discard
              </Button>
            </Box>
            <Box style={{ width: "70%" }}>
              <Button
                variant="contained"
                color="secondary"
                style={{ borderRadius: 0, backgroundColor: "#34343C" }}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ borderRadius: 0, backgroundColor: "#4056F4" }}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ borderRadius: 0, backgroundColor: "#4056F4" }}
              >
                Secondary
              </Button>
              <Box
                display="flex"
                flexDirection="row"
                style={{
                  width: "90%",
                  backgroundColor: "#34343C",
                  paddingLeft: 25,
                  paddingBottom: 25,
                }}
              >
                <Box>
                  <CssTextField
                    className={classes.margin}
                    label="Name"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        name: e.target.value,
                      })
                    }
                  />
                  <CssTextField
                    className={classes.margin}
                    label="Phone"
                    type="number"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        phone: Number(e.target.value),
                      })
                    }
                  />
                  <CssTextField
                    className={classes.margin}
                    label="Email"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        email: e.target.value,
                      })
                    }
                  />
                </Box>
                <Box>
                  <CssTextField
                    className={classes.margin}
                    label="Location"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        location: e.target.value,
                      })
                    }
                  />
                  <CssTextField
                    className={classes.margin}
                    label="Wish Salary"
                    type="number"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        wishSalary: e.target.value,
                      })
                    }
                  />
                  <CssTextField
                    className={classes.margin}
                    label="Position"
                    variant="outlined"
                    onChange={(e) =>
                      setCandidate({
                        ...candidate,
                        position: e.target.value,
                      })
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Modal>
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

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);
