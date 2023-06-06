
const dotenv = require("dotenv").config()
const express = require('express')

const  connectDB =require("./config/connectDB")
const mongoose= require("mongoose")
const Task = require("./Model/taskModel")
const taskRoutes= require("./routes/taskRoute")
const cors = require("cors");




const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use("/api/tasks",taskRoutes);
// const logger= (req, res,  next) => {
//     console.log("Middleware ran");
//     console.log(req.method);
    
//     next()
// }
 // "frontend": "npm start --prefix frontend",
    // "both": "concurrently \"npm run backend\" \"npm run frontend\""


app.get("/",(req,res) =>{
    res.send("Home Page");
});


//Get data from MongoDB
app.get("/api/tasks", async (req,res) =>{
    try{

        const tasks= await Task.find()
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({msg: error.message})

    }

})


const PORT=process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`);
    });

}).catch((err) => console.log(err));
 


