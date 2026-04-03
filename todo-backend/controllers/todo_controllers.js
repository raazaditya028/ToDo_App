const ToDo = require("../models/todoModel");


const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos" });
    }
};


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


module.exports = { getTodos, addTodo };