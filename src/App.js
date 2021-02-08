import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import {
  Drawer,
  Button,
  Box,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  DonutLarge,
  Work,
  People,
  Business,
  Telegram,
  PinDrop,
  Assignment,
  ReplyAll,
  Search,
  MoreHoriz,
  ExpandMore,
} from "@material-ui/icons";

import logo from "./components/logo.svg";
import Market from "./Layouts/Market";
import Mapjs from "./Layouts/Map";

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div style={{ backgroundColor: "#24292E", minHeight: "100vh" }}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawer,
          }}
        >
          <Box style={{ width: 140 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 21,
                marginBottom: 40,
              }}
            >
              <img src={logo} alt="logo" />
            </div>
            {drawerList.map((item, i) => (
              <Box
                component={Link}
                to={item.path}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                style={{
                  backgroundColor: i === index ? "red" : "transparent",
                  width: "100%",
                  marginBottom: 15,
                  textDecoration: "none",
                }}
              >
                <Button
                  onClick={() => setIndex(i)}
                  variant="text"
                  size="large"
                  startIcon={item.icon}
                  style={{
                    fontSize: 12,
                    color: "white",
                  }}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
            <Box style={{ textAlign: "center", marginTop: 20 }}>
              <Typography className={classes.timeStyle}>
                {days[new Date().getDay()]}
              </Typography>
              <Typography className={classes.timeStyle}>
                {months[new Date().getMonth()]} {new Date().getDate()}
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "#CECECE",
                }}
              >
                {new Date().getHours()}:{new Date().getMinutes()}
              </Typography>
              <Typography className={classes.timeStyle}>Actual Time</Typography>
            </Box>
          </Box>
        </Drawer>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.boxbar}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.searchBox}
          >
            <Typography style={{ color: "white" }}>Quick Search...</Typography>
            <Box display="flex">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  size="small"
                  endIcon={
                    <ExpandMore className={classes.displayButtonGroup} />
                  }
                  className={classes.buttonBoxBar}
                  onClick={handleClick}
                >
                  All Entities
                </Button>
                <Button
                  size="small"
                  endIcon={
                    <ExpandMore className={classes.displayButtonGroup} />
                  }
                  className={classes.buttonBoxBar}
                >
                  Industry
                </Button>
                <Button
                  size="small"
                  endIcon={
                    <ExpandMore className={classes.displayButtonGroup} />
                  }
                  className={classes.buttonBoxBar}
                >
                  Location
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.searchIcon}
              >
                <Search style={{ color: "white" }} />
              </Box>
            </Box>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography style={{ color: "white" }}>Advance Search</Typography>
            <MoreHoriz
              style={{ color: "white", marginLeft: 25, fontSize: 40 }}
            />
          </Box>
        </Box>
        <Switch>
          <Route exact path="/">
            <Redirect to="/market" />
          </Route>
          <Route path="/market" exact component={Market}></Route>
          <Route path="/map" exact component={Mapjs} />
        </Switch>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: "#1A1C21",
  },
  searchBox: {
    backgroundColor: "#2B313B",
    width: "70%",
    height: "70%",
    marginLeft: 15,
    paddingLeft: 15,
    borderRadius: 5,
  },
  boxbar: {
    paddingLeft: 140,
    paddingRight: 40,
    height: 65,
    backgroundColor: "#20232B",
  },
  timeStyle: {
    color: "white",
    fontWeight: "lighter",
    fontSize: 12,
    color: "#CECECE",
  },
  searchIcon: {
    backgroundColor: "red",
    height: 45.5,
    width: 46,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonBoxBar: {
    borderLeft: "1px solid #7B868D",
    borderRadius: 0,
    color: "white",
    marginRight: 10,
  },
  displayButtonGroup: {
    color: "red",
    marginLeft: 15,
  },
}));

const drawerList = [
  { name: "Dashboard", icon: <DonutLarge />, path: "/dashboard" },
  { name: "Job Orders", icon: <Work />, path: "/job" },
  { name: "Market", icon: <People />, path: "/market" },
  { name: "Companies", icon: <Business />, path: "/companies" },
  { name: "S. Projects", icon: <Telegram />, path: "/projects" },
  { name: "Maps", icon: <PinDrop />, path: "/map" },
  { name: "Tasks Tool", icon: <Assignment />, path: "/task" },
  { name: "Sendouts", icon: <ReplyAll />, path: "/sendouts" },
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
