const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({ 
   name: String,
   status: String,
   date: Date,
   comment: String,
   projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    },
});
module.exports = mongoose.model("taskCollection", infoSchema);