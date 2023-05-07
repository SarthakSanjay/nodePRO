const Task =require('../models/Tasks')
const asyncWrapper = require('../middleware/async')

const getAlltasks = asyncWrapper( async (req,res) => {
   
        const task = await Task.find({})
        res.status(200).json({task})
        // res.status(200).json({task,amount:task.length})
        // res.status(200).json({status:'success',data:{task,nbHits:task.length}})
   
})
const createTask =asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
        console.log(task)

})
const getSingleTask = asyncWrapper( async (req,res,next)=>{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        
        if(!task){
            const error = new Error('Nott Found')
            error.status = 404
            return next(error)
        }
        res.status(200).json({task})
  
})
const updateTask =asyncWrapper( async(req,res)=>{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }

        res.status(200).json({task})
  

})
const deleteTask =async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports = {
    getAlltasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}