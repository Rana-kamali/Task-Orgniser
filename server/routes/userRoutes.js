const express = require('express');
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const router = express.Router();



router.post("/login", (request, response) => {
    userModel.findOne({username: request.body.email}).then((userData) =>{
      if(userData){
        const checkHashPassword = bcrypt.compareSync(request.body.password, userData.password);
        if(checkHashPassword){
          console.log("request.session", request.session);
          request.session.user = {
            id: userData._id,
          }
          console.log("request.session", request.session);
          response.send("loged in");
          
        }else{
          response.status(401).send("password is wrong");
        }
      }else{
        response.status(404).send("Please try again")
      }
    })
    // request.session.loggedIn = true;
    // response.send("User has logged in!");
  });
router.post("/register", (req, res) => {
    const body = req.body;
    console.log("req body: " ,body);
    const passwordHash = bcrypt.hashSync(body.password, 10);
    console.log("password hash : ", passwordHash);

    const user = { email: body.email , password: passwordHash };
    console.log("user: ", user)
    userModel.create(user).then((data) => {
        console.log("getting data ", data);
    })
    res.send("New user has been created")
})



module.exports = router;