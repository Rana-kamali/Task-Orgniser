import React, { useState } from "react";
import LoginApp from "../Login/loginApp";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Welcome } from "../NewList/Welcome";
import { userHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("userLoggedin") ? true : false;
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);
  const [user, setUser] = useState({ name: "", email: "" });

  const logout = () => {
    console.log("loggedOut");
    setUser({ name: "", email: "" });
    setUserLoggedIn(false);
    window.localStorage.setItem("userLoggedin", "");
    history.replace("/");
  };
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h9" className={classes.title}>
              Welcome {user.name}
            </Typography>

            {!userLoggedIn && (
              <Link to="/login">
                {" "}
                <Button variant="contained" color="secondary">
                  Login here
                </Button>
              </Link>
            )}
            {userLoggedIn && (
              <Button onClick={logout} variant="contained" color="secondary">
                Log out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <div className="landingBG">
        <div className="landing">
          <Switch>
            <Route path="/login">
              <LoginApp
                setUserLoggedIn={setUserLoggedIn}
                setUser={setUser}
                user={user}
              />
            </Route>
            <Route path="/"> {userLoggedIn && <Welcome />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default LandingPage;
