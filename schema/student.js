const mongoose=require('mongoose');
const stuschema=new mongoose.Schema({
    roll: {
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true
    },
    marks: {
        type:Number
    }
});

const Student=mongoose.model('Student',stuschema);
module.exports=Student;