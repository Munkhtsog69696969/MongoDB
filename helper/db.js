const mongoose=require("mongoose");

const uri="mongodb+srv://Munkhtsog:Munkhtsog2005@cluster0.0lcnmk0.mongodb.net/?retryWrites=true&w=majority";


const connect=async()=>{
    try{
        await mongoose.connect(uri);
        console.log("Success")
    }catch(err){
        console.log(err)
    }
}

module.exports=connect