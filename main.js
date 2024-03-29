const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(todoModel)
});
app.post("/create/todo", (req, res) => {
  const {task ,description, isCompleted, deadline,  priority}= req.body;
   const todo = new todoModel(
    {task ,description, isCompleted, deadline,  priority}
   )
   todo.save().then(result=>{ res.json(result)}).catch(err=>{res.send(err)})
});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
