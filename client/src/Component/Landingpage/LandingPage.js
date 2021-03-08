import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginApp from "../Login/loginApp";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Welcome } from "../NewList/Welcome";
import {userHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LandingPage = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("userLoggedin") ? true : false;
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);
  const [user, setUser] = useState({ name: "", email: "" });
  
  const classes = useStyles();

  const logout = () => {
    console.log("loggedOut");
    setUser ({name: "", email: ""  })
    setUserLoggedIn(false);
    window.localStorage.setItem("userLoggedin", "")
    history.replace("/");
  };
  return (
    <Router>
      <div className="landingBG">
        <div className="landing">
          {!userLoggedIn && (
            <Link to="/login">
              {" "}
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Link>
          )}
          {userLoggedIn && (
            <Button onClick={logout} variant="contained" color="secondary">
              Log out
            </Button>
          )}
          <Switch>
            <Route path="/login">
              
              <LoginApp setUserLoggedIn={setUserLoggedIn} setUser={setUser} user={user}/>
            </Route>
            <Route path="/"> {userLoggedIn && <Welcome />}</Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default LandingPage;
