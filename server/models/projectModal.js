const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({ 
   projectName : String,
});
module.exports = mongoose.model("category", categorySchema);