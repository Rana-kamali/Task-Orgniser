
const express = require("express");

const projectModel= require("../models/projectModal");
const todoModel = require("../models/todoModel");
const router = express.Router();




router.post("/addId" , (request, response) => {
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