const mongoose = require("mongoose");
require("../config");
Village= new mongoose.Schema({
  Taluka_Id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'taluka'
  },
  
  Village_Name: String,
});
module.exports=mongoose.model("Village",Village)