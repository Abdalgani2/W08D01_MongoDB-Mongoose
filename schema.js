const mongoose = require("mongoose");
const yodoSchema = new mongoose.Schema({
    task:{type:String, required:true},
    description:{type:String},
    isCompleted:{type:string},
    deadline:{type:string, requierd:true},
    priority:{type:String, required:true}
})
module.exports = mongoose.model("todo",todoSchema);