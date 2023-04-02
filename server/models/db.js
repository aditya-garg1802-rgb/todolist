const mongoose = require('mongoose')

module.exports=mongoose.connect('mongodb+srv://aditya1802:Aditya2002@cluster0.f0ecm6b.mongodb.net/todolist',{
    useUnifiedTopology : true,
    useNewUrlParser:true
},err=>{
    if(err) console.log(`Error in DB connection ${err}`);
    console.log(`MongoDB Connection Succeeded...`)
})