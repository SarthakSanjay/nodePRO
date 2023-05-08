const express = require('express')
const router = express.Router()
const {
    getAlltasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)
module.exports = router