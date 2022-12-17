const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    namebook:{
        type:String,
        trim:true,
        required:true
    },
    nameauthor:{
        type:String,
        trim:true,
        required:true
    },
    pages:{
        type:String,
        trim:true,
        required:true
    },
})

const Book = mongoose.model("Book", bookSchema)
module.exports=Book