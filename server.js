const express=require('express');
const app=express();
const port=3000;
const db=require('./db'); 
const bodyParser=require('body-parser');
app.use(bodyParser.json());

// comment added again
// data being parsed and stored in req body
app.get('/',(req,res)=>{
    res.send("welcome to my website")
})

// import router files
const PersonRoutes=require('./routes/personRoutes');
app.use('/person',PersonRoutes);

// import menu files
const MenuRoutes=require('./routes/menuRoutes');
app.use('/menu',MenuRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})