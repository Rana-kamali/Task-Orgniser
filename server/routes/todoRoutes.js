
const express = require("express");

const todoModel = require("../models/todoModel");
const router = express.Router();



router.post('/add', (req, res) => {

  const requestToSend = req.body;
  console.log("body: ", requestToSend);
  todoModel.create(requestToSend).then((data)=>{
    console.log("data: ", data)
  })
  res.send("you have submitted post");
});



router.get("/getById/:id", (req,res) => {
    todoModel.find({categoryId: req.params.id}).then((data) => {
        console.log(data);
        res.send(data);
    }).catch(() =>{
        console.log("its wrong")
        res.status(404).send("category ID is wrong")
    })
} )

router.patch("/update/:id", (request,response) => {

    todoModel.findByIdAndUpdate(request.params.id, request.body, { 
      new: true,
      upsert: true })
    .then((data) => {
      console.log("Update successful!");
      response.send(data);
    }).catch (()=>{
      console.log("Something went wrong!!")
        response.status(404).send("Project was not found")
    })
  
  })

  router.delete("/delete/:id", (request, response) => {
    todoModel.findByIdAndDelete(request.params.id)
      .then((data) => {
        console.log("Delete successful!");
        response.send(data);
      })
      .catch(() => {
        console.log("Something of delete went wrong!!");
        response.status(404).send("todo  was not found!!");
      });
  });

  

module.exports = router;