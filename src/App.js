import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import {
  // BrowserRouter as Router,
  Route,
  Switch,
} from "react-router";

import { Welcome } from "./Component/NewList/Welcome";

import LandingPage from "./Component/Landingpage/LandingPage";
import LoginForm from "./Component/Login/LoginForm";

import Container from "@material-ui/core/Container";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const loggedIn = window.localStorage.getItem("userLoggedin") ? true : false;
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);

  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/login">
            <LoginForm
              setUserLoggedIn={setUserLoggedIn}
              setUser={setUser}
              user={user}
            />
          </Route>
          <Route path="/task/:id"></Route>

          <Route exact path="/">
            {" "}
            {userLoggedIn && <Welcome />}
          </Route>
        </Switch>

        <LandingPage
          userLoggedIn={userLoggedIn}
          setUser={setUser}
          setUserLoggedIn={setUserLoggedIn}
        />
      </Container>
    </Router>
  );
}

export default App;
