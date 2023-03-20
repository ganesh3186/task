const mongoose = require("mongoose");
require("../config");
state = new mongoose.Schema({
  State_Id:{
    type:String
  },
  State_Name: String,
});
module.exports=mongoose.model("state",state)