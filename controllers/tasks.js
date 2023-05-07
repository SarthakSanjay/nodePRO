const Task =require('../models/Tasks')

const getAlltasks = async (req,res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
        console.log(task)

    }catch(error){
        res.status(500).json({msg:error})
        console.log(error)
    }
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