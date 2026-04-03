const ToDo = require("../models/todoModel");

// ✅ GET
const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos" });
    }
};

// ✅ POST
const addTodo = async (req, res) => {
    try {
        const { title } = req.body;

        const newTodo = new ToDo({ title });
        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: "Error adding todo" });
    }
};

// ✅ EXPORT BOTH
module.exports = { getTodos, addTodo };