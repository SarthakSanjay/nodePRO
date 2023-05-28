const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        maxLength:150,
        required:true
    },
    author:{
        type:String,
        required:true,
        uppercase:true
    },
    date_posted:{
        type:Date,
        default: Date.now()
    }
})

// Pre-save middleware to modify data
blogSchema.pre('save', function (next) { //save , validate, remove
    // Example: Capitalize the first letter of the name before saving
    this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
    next();
  });
  
  // Post-save middleware for logging
  blogSchema.post('save', function (doc, next) {
    console.log('Blog saved:', doc);
    next();
  });
module.exports = new mongoose.model("Blog", blogSchema)
