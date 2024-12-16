const express=require('express');
const app=express();
const db=require('./db'); 
const bodyParser=require('body-parser');
require('dotenv').config();
const PORT=process.env.PORT || 3000;
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

app.listen(PORT,()=>{
    console.log("server is running on port 3000");
})