import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddTask } from "./AddTask";
import ProjectList from "./ProjectList";

const Welcome = () => {
  return (
    <Router>
      <Link to="/AddTask">
        <p>Add A Task </p>
      </Link>
      <Link to="/projectList">
        <p>project list </p>
      </Link>

      <Switch>
        <Route path="/AddTask">
          <AddTask />
        </Route>
        <Route path="/projectList">
          <ProjectList />
        </Route>
      </Switch>
    </Router>
  );
};

export { Welcome };
