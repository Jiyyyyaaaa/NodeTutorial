const express=require('express');
const router=express.Router();
const Person=require('./../models/Person');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const savedPerson=await newPerson.save();
        console.log('data saved');
        res.status(200).json(savedPerson);
    }
    catch(err){
       console.log(err);
       res.status(500).json({
         error:'internal server error'
       });
    }
 })

 
router.get('/',async (req,res)=>{
    try{
    const data= await Person.find();
    console.log('data fetched');
    res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({
          error:'internal server error'
        });
    }
})
// ***********Parameterised API calls
router.get('/:workType',async (req,res)=>{
    try{
        const workType=req.params.workType;
    if (workType=='chef' || workType=='waiter' || workType=='manager'){
         const response=await Person.find({work:workType});
         console.log('data fetched');
         res.status(200).json(response);
    }
    else{
        res.status(500).json({error:"invalid worktype"});
    }
}
catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error'});
}
})
// update operation
router.put('/:id',async(req,res)=>{
    try{
       const personId=req.params.id;
       const updatePerson=req.body;
       const response= await Person.findByIdAndUpdate(personId,updatePerson,{
        new:true,
        runValidators:true,
       });
       if (!response){
        return res.status(404).json({error:'person not found'});
       }
       console.log('data updated');
       res.status(200).json({response});

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
// delete operation
router.delete('/:id',async(req,res)=>{
    try{
const personId=req.params.id;
const response=await Person.findByIdAndDelete(personId);
if (!response){
    res.status(404).json({error:'person not found'});
}
console.log('data deleted');
res.status(200).json({message:'person deleted successfully'});
    }
    catch(err){
   console.log(err);
   res.status(500).json({error:'internal server error'})
    }
})
module.exports=router;