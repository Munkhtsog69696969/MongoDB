
const express=require("express");

const mongoose=require("mongoose");

const uri="mongodb+srv://Munkhtsog:Munkhtsog2005@cluster0.0lcnmk0.mongodb.net/?retryWrites=true&w=majority";

const cors=require("cors");

const connect=require("./helper/db")

const app=express();

const port=8000;


app.use(cors());
app.use(express.json())

connect();

const Cat=mongoose.model("Cat",{name:String})

app.get("/",async(req,res)=>{
    res.send()
});

app.post("/cats",async (req,res)=>{
    const kitten=new Cat({name:"uvuvewenieoiimasu"});
    kitten.save().then(()=>console.log("oon"));
    res.send("success")
});

app.put("/cat/:id",async(req,res)=>{
    const id=req.params.id;
    const cat=await Cat.findByIdAndUpdate(id,{name:"gulug"});
    res.send("updated");
    res.send(cat)
});

app.post("/catsCreate",async(req,res)=>{
    const body=req.body;
    const kitty=new Cat(body);
    await kitty.save();
    res.send("successfully created");
})

app.delete("/cat/:id",async(req,res)=>{
    const id=req.params.id;
    await Cat.deleteOne({_id:id});
    res.send("deleted");
})

app.listen(port,()=>{
    console.log(`Server listening at : ${port}`)
})