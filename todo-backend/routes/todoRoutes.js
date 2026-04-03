const express = require("express");
const router = express.Router();

// ✅ CHECK PATH CAREFULLY
const { getTodos, addTodo } = require("../controllers/todo_controllers");

router.get("/get-todo", getTodos);   // ✅
router.post("/add-todo", addTodo);   // ✅

module.exports = router;