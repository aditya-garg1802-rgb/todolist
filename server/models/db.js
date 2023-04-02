const mongoose = require('mongoose')

module.exports=mongoose.connect('//your mongodb connecrtion string',{
    useUnifiedTopology : true,
    useNewUrlParser:true
},err=>{
    if(err) console.log(`Error in DB connection ${err}`);
    console.log(`MongoDB Connection Succeeded...`)
})
