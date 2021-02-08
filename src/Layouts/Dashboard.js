import React from "react";
import { FiberManualRecord, AddCircleOutline } from "@material-ui/icons";
import {
  Button,
  Box,
  makeStyles,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
} from "@material-ui/core";

import test from "../images/test.jpeg";

export default function Dashboard() {
  const classes = useStyles();

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
    name: "Anthony Gonzales",
    rol: "Construction Manager",
    industry: "asd",
    jobPosition: "kajsdf",
    phone: 654,
    salary: 542,
    location: "NJ",
  },
  {
    name: "Anthony Gonzales",
    rol: "Construction Manager",
    industry: "asd",
    jobPosition: "kajsdf",
    phone: 654,
    salary: 542,
    location: "NJ",
  },
  {
    name: "Anthony Gonzales",
    rol: "Construction Manager",
    industry: "asd",
    jobPosition: "kajsdf",
    phone: 654,
    salary: 542,
    location: "NJ",
  },
  {
    name: "Anthony Gonzales",
    rol: "Construction Manager",
    industry: "asd",
    jobPosition: "kajsdf",
    phone: 654,
    salary: 542,
    location: "NJ",
  },
  {
    name: "Anthony Gonzales",
    rol: "Construction Manager",
    industry: "asd",
    jobPosition: "kajsdf",
    phone: 654,
    salary: 542,
    location: "NJ",
  },
];
