const express = require("express");
const router = express.Router();


const { getTodos, addTodo } = require("../controllers/todo_controllers");

router.get("/get-todo", getTodos);   
router.post("/add-todo", addTodo);   

module.exports = router;