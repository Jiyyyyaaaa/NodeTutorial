const mongoose=require('mongoose');
const MenuSchema=new mongoose.Schema({
    name:{
type:String,
required:true,
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
   type:[String],
   default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
})
const Menu=mongoose.model('Menu',MenuSchema);
module.exports=Menu;