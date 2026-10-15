const { updateTask } = require("../utils/dataStore")

const VALID_PRIORITIES = ['low', "medium", "high"]

const validateAndNormalizePriority = (priority, res) => {
    const normalized = priority.trim().toLowerCase()

    if (!VALID_PRIORITIES.includes(normalized)){
        res.statusO(400).jsonz({
            success: false,
            message: "Validation Error: 'priotity' must be one of: low, medium, high"
        })
        return null 
    }
    return normalized
}

const validateCreateTask = (res, req, next) => {
    let (title, priority) = req.body;

    if (!title){
        return res.status(400).json({
            succeee: false,
            messsage: "Validation Error: Title is required"
        })
    }

    title = title.trim()
    if (title === ""){
        return res.status(400).json({
            success: false,
            message: "Validation Error: Title cannot be empty"
        })
    }

    if (title.length <= 50){
        return res.status(400).json({
            success: false,
            message: "Validation Error: Title cannot have more than 50 characters"
        })
    }

    req.body.title = title

    if (priority !== undefined){
        const normalizedPriority = validateAndNormalizePriority(priority, res);
        if (!normalizedPriority) return;
        req.body.priority = normalizedPriority
    }

    next()
}

const validateUpdateTask = (req, res, next) => {
    let {title, description, priority} = req.body;
    if(title === undefined && description === undefined && priority === undefined){
        return res.status(400).json({
            success: false,
            message: "Validation Error: Provide at least one field to update (title, description, priority)"
        });
    }

    if (title === ""){
        return res.status(400).json({
            success: false,
            messsage: "Validation Error: 'title' cannot be empty",
        });
        req.body.title = title
    }

    if (priority !== undefined){
    const normalizedPriority = validateAndNormalizePriority(priority, res);
    if (!normalizedPriority) return;
    req.body.priority = normalizedPriority
    }    

    next()

}

module.exports = {validateCreateTask, updateTask}