const getAlltasks = (req,res)=>{
    res.send('all tasks')
}
const createTask = (req,res)=>{
    res.json(req.body)
    console.log(req.body)
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