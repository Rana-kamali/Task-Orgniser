import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginApp from "../Login/loginApp"
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const LandingPage = () => {
  const classes = useStyles();
  return (
      <Router>
          <div className="landingBG">
    <div className="landing">
     <Link to="/login"> <Button variant="contained" color="secondary">
        Login
      </Button>
      </Link>
      <Switch>
          <Route path="/login"><LoginApp/></Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
};
export default LandingPage;
