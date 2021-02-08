import React from "react";
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
} from "@material-ui/core";

import test from "../images/test.jpeg";

export default function Dashboard() {
  const classes = useStyles();

  const [modal, setModal] = React.useState(false);

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
            Market
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
                  Industry
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Job Position
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Phone
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Salary
                </TableCell>
                <TableCell align="left" style={{ color: "white" }}>
                  Location
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
                        <Typography
                          style={{
                            fontWeight: "lighter",
                            fontSize: 10,
                            color: "#CECECE",
                          }}
                        >
                          {row.rol}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: 12,
                        color: "#CECECE",
                      }}
                    >
                      {row.industry}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: 12,
                        color: "#CECECE",
                      }}
                    >
                      {row.jobPosition}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: 12,
                        color: "#CECECE",
                      }}
                    >
                      {row.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: 12,
                        color: "#CECECE",
                      }}
                    >
                      {row.salary}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: 12,
                        color: "#CECECE",
                      }}
                    >
                      {row.location}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="outlined"
                      style={{
                        color: "white",
                        border: "1px solid white",
                        borderRadius: 0,
                      }}
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
}));

const rows = [
  {
    name: "Samantha Wong",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
  },
  {
    name: "Samantha Wong",
    rol: "Architect",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
  },
  {
    name: "ALi Malik",
    rol: "Truss Designer",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
  },
  {
    name: "Ana Jackson",
    rol: "Building Analyst",
    industry: "Construction",
    jobPosition: "Project Manager",
    phone: 5566778899,
    salary: "$ 100,000.00 MXN",
    location: "NJ",
  },
];
