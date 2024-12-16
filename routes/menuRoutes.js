const express=require('express');
const router=express.Router();
const Menu=require('../models/Menu'); 

router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newMenu=new Menu(data);
      const savedMenu=await newMenu.save();
      console.log("data saved");
      res.status(200).json(savedMenu);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})
router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if (tasteType=='spicy' || tasteType=='sweet' || tasteType=='sour'){
            const response=await Menu.find({taste:tasteType});
            console.log('data fetched');
            res.status(200).json({response});
        } 
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'invalid tasteType'});
    }
})

module.exports=router;