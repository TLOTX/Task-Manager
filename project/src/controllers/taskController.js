const {
  getAllTasks,
  createTask,
  updateTask,
  getTaskById,
  markAsCompleted,
} = require("../utils/dataStore.js");

const getTasks = (req, res) => {
  let tasks = getAllTasks();
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

// update handler
const updateTaskHandler = (req, res) => {
  const task = updateTask(Number(req.params.id), req.body);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: task,
  })
};

// console.log(updateTask(1, { title: "Making Pizza for camping", description: "We will be hungry after the walk"}));

const addTask = (req, res) => {
  const { title, description, priority } = req.body;
  const newTask = createTask(req.body);

  res.status(201).json({
    success: true,
    message: "new Task has ben created successfully",
    data: newTask,
  });
};

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;

  const [deletedTask] = tasks.splice(index, 1);
  return deletedTask;
};

// console.log(deleteTask(1))

module.exports = { getTasks, addTask, createTask, updateTaskHandler };
