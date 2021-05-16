const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    task:{type:String, required:true},
    description:{type:String},
    isCompleted:{type:string},
    deadline:{type:string, requierd:true},
    priority:{type:String, required:true}
})
module.exports = mongoose.model("User",userSchema);