const mongoose=require('mongoose');
// define person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        // required field is mandatory if required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        // same email ids will not be stored,it has to be unique->error will be thrown
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})

// create Person Model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;