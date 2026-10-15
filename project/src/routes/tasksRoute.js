const express = require("express")
const router = express.Router()

const {getTasks, addTask} = require('../controllers/taskController.js')
const { validateCreateTask } = require("../middleware/validateTask.js")

router.get('/', getTasks)
router.post('/', validateCreateTask, addTask)
router.put()

module.exports = router