const mongoose=require('mongoose'); 
require('dotenv').config();

// url for local db
// const mongoURL='mongodb://localhost:27017/hotels'
// url for atlas
const mongoURL=process.env.MONGODB_URL;

// setup connectiom
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})


// get default connection
// mongooose maintains a default connection object representing the mongodb connection
const db=mongoose.connection;


// even listeners
db.on('connected',()=>{
    console.log("connected to MongoDB server");
})
db.on('error',()=>{
    console.log("MongoDB connection error");
})
db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
})

// export db connection
module.exports=db;