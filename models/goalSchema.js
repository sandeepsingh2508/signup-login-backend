const mongoose=require('mongoose')
const schema=mongoose.Schema

const goalSchema= new schema(
    {
       
        cityName:{
            type:String,
        }
},
{
    timestamps:true,
})

module.exports=mongoose.model('citynames',goalSchema)