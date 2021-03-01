import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {AddTask} from "./AddTask"
// import{TaskList} from "./TaskList"

const Welcome = () => {
  return (
    <Router><div>
    <Link to="/AddTask"><p>Add A Task </p></Link>
    {/* <Link to="/TaskList"><p> Check Your Task</p></Link> */}
    <Switch>
    <Route path="/AddTask"><AddTask projects={[]}/></Route>
    {/* <Route path="/TaskList"><TaskList/></Route> */}
    

  </Switch>
  </div>
 
  </Router>
    
  );
};
export { Welcome };
