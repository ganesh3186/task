const mongoose=require("mongoose")
require("../config")
const farmer=new mongoose.Schema({
    Row:String,
            FARMER_ID:String,
            FO_ID:String,
            FARMER_NAME:String ,
            MOBILE_NO:String ,
            LAST_VISIT_DATE: String,
            EXISTING_FARMER:String ,
            VILLAGE_NAME: String,
            TOTAL_LAND_AREA:String ,
            STATUS: String,
            REG_DATE: String,
            LAST_VISIT_FO_NAME:String
})
module.exports=mongoose.model("farmer",farmer)