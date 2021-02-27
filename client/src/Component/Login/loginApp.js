import React, { useState } from "react";
import LoginForm from "./LoginForm"
import {Welcome} from "../NewList/Welcome"
// import{TaskForm} from "../NewList/TaskForm"
// import { AddTask } from "../NewList/AddTask";



function LoginApp() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
        console.log("you have logged in")
        setUser({
            name: details.name,
            email: details.email,
        })
    }else {
        console.log("Details not match")
        setError("Details not match")
    }
  };

  const logout = () => {
    console.log("loggedOut");
    setUser ({name: "", email: ""  })
  };


  return <div className="Login">
{(user.email !=="") ? (
<div className = "welcome">
    <h2> Welcome, <span>{user.name}</span></h2>
<button onClick={logout}>Logout</button>
<Welcome/>
{/* <TaskForm projects={[]}/> */}
{/* <AddTask projects={[]}/> */}


</div>

):(
    <LoginForm Login={Login} error= {error}/>
)}


  </div>;
}

export default LoginApp;
