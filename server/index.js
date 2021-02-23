const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const session =  require("express-session");

const internalRoutes = require("./routes/internalRouts");
// const modelSchema = require("./models/ModelSchema");
// const userRoutes = require("./models/userSchema");

const app = express()
app.use(
  session({
    secret: "Random seceret",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.connect('mongodb://localhost:27017/TaskOrgniser', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/todo");
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/internal", internalRoutes);
app.use("/api/user", userRoutes);
app.use("/api/project", projectRoutes);

app.get('/', function (req, res) {
  res.send(` app is listening at http://localhost:${port}`)
})
 

app.listen(port,()=>
console.log(` app is listening at http://localhost:${port}`)
);