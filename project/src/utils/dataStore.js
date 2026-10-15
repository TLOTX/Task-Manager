let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    description: "Complete the 4-week backend course",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-01-01T09:00:00").toISOString(),
    updatedAt: new Date("2025-01-01T09:00:00").toISOString(),
  },
  {
    id: 2,
    title: "Build a REST API",
    description: "Create a Task Manager API with Express",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-01-02T10:00:00").toISOString(),
    updatedAt: new Date("2025-01-02T10:00:00").toISOString(),
  },
  {
    id: 3,
    title: "Build a TYPESCRIPT BACKEND FILE",
    description: "Create a FULLSTACK TYPESCRIPT PROJECT",
    completed: true,
    priority: "high",
    createdAt: new Date("2025-01-02T10:00:00").toISOString(),
    updatedAt: new Date("2025-01-02T10:00:00").toISOString(),
  },
];

let nextId = 3;

const getAllTasks = () => {
  return tasks;
};

// console.log(getAllTasks());

const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

// console.log(getTaskById(1));

const createTask = (taskData) => {
  const newTask = {
    id: ++nextId,
    title: taskData.title,
    description: taskData.description || "",
    completed: taskData.completed || false,
    priority: taskData.priority || "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  return newTask;
};

// console.log(
//   createTask({ title: "Write Code", description: "Backend with golang" }),
// );

// Update Task

const updateTask = (id, updates) => {
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) return null;

    const updatedTask = {
        ...tasks[index],
        ...updates,
        id: tasks[index].id,
        createdAt: tasks[index].createdAt,
        updatedAt: new Date().toISOString(),
    };

    tasks[index] = updatedTask;
    return updatedTask;
};


const markAsCompleted = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (!task) return null;

  task.completed = true;
  task.updatedAt = new Date().toISOString();
  return task;
};

// console.log(markAsCompleted(1));

const get1task = (id) => {
  return tasks.find((task) => task.id === id) || null;
};

// console.log(get1task(2));

module.exports = {
  getAllTasks,
  getTaskById,
  get1task,
  createTask,
  markAsCompleted, 
  updateTask,
};
