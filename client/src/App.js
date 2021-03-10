import React from "react";
// import './App.css';
import LoginApp from "./Component/Login/loginApp";
import LandingPage from "./Component/Landingpage/LandingPage";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg">
      {/* <LoginApp/> */}
      <LandingPage />
    </Container>
  );
}

export default App;
