import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <Container maxWidth="lg">
      <div className="login">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" name="email" id="email">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" name="password" id="password">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              ></input>
            </div>
            <div className="loginbtn">
              <Button
                type="submit"
                value="LOGIN"
                variant="contained"
                color="secondary"
              >
                LOGIN
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
