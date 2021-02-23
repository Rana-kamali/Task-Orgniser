const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({ 
   name: String,
   status: String,
   date: Date,
   comment: String,
   categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
});
module.exports = mongoose.model("taskCollection", infoSchema);