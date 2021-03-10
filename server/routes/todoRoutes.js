
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



router.get("/all/:projectId", (req,res) => {
    todoModel.find({projectId: req.params.projectId}).then((data) => {
        res.send(data);
    }).catch(() =>{
        res.status(404).send("invalid project")
    })

 
})
router.get("/:id", (req,res)=>{
  todoModel.findById(req.params.id).then ((data)=>{
    res.send(data);
  }).catch(()=>{
    res.status(404).send("not found")

  })
})

router.patch("/update/:id", (request,response) => {

    todoModel.findByIdAndUpdate(request.params.id, request.body, { 
      new: true,
      upsert: true })
    .then((data) => {
      console.log("body: " ,request.params.id)
      console.log("body: " , request.body)

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