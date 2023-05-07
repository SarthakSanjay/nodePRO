const Task =require('../models/Tasks')

const getAlltasks = (req,res)=>{
    res.send('all tasks')
}
const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    console.log(task)
}
const getSingleTask = (req,res)=>{
    res.json({id:req.params.id})
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