const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    dni:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        trim:true,
        required:true,
        default:"user"
    },
    nombres:{
        type:String,
        trim:true
    },
    apellidos:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    codAsegurado:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    }
},{
    versionKey:false,
    timestamps:true
});
module.exports=mongoose.models.UserModel || mongoose.model("UserModel", userSchema);