
const express = require("express");
const projectModel= require("../models/projectModal");
const router = express.Router();



router.get('/', (req, res) => {
  res.send(` app is listening at http://localhost:3000/internal`)
})
router.post("/" , (request, response) => {
  const reqBody = request.body;
  console.log("req body: ", reqBody);
  projectModel.create(reqBody).then((data) => {
      console.log("data: ", data);
      response.send(data);
  }).catch(() =>{
      response.status(500).send(data);
})

})
router.get("/all", (request, response) => {
  // const requestBody = request.body;
  // console.log("request body:  ", requestBody);
  projectModel.find().then((data)=>{
      response.send(data);
  }). catch((error) => {
      console.log("error", error);
      response.send(" todo session routes is not working");
  })
  
});



module.exports = router;