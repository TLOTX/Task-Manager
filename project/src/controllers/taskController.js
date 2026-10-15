const { getAllTasks, createTask } = require('../utils/dataStore.js');

const getTasks = (req,res) => {
    let tasks = getAllTasks();
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks,
    });
};

const addTask = (req, res)=>{
    const {title, description, priority} = req.body
    const newTask = createTask(req.body)

    res.status(201).json({
        success:true,
        message:"new Task has ben created successfully",
        data:newTask
    })
}

module.exports = { getTasks,addTask,createTask };
