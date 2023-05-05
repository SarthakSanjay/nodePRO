const getAlltasks = (req,res)=>{
    res.send('all tasks')
}
const createTask = (req,res)=>{
    res.send('create tasks')
}
const getSingleTask = (req,res)=>{
    res.send('single task')
}
const updateTask = (req,res)=>{
    res.send('updt tasks')
}
const deleteTask = (req,res)=>{
    res.send('del tasks')
}
module.exports = {
    getAlltasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}