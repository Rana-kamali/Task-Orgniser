
const express = require("express");
const dataModel = require("../models/todoModel");

const router = express.Router();



router.get('/', (req, res) => {
  res.send(` app is listening at http://localhost:3000/internal`)
})


router.post('/add', (req, res) => {

  const requestToSend = req.body;
  console.log("body: ", requestToSend);
  dataModel.create(requestToSend).then((data)=>{
    console.log("data: ", data)
  })
  res.send("you have submitted post");
});

module.exports = router;