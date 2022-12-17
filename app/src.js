const express=require("express")

const path = require("path")
const hbs = require("hbs")
const app = express()
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/test",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to db suesscc")
    }
})
app.use(express.json())
//app.use to يجيب ملف معين ويستخدمها
app.use(express.static(path.join(__dirname, "../clientside/public")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../clientside/views"))
hbs.registerPartials(path.join(__dirname, "../clientside/layout"))

app.use(express.urlencoded({extended:true}))

const routerbook = require("./router/books.routes")
app.use(routerbook) 


app.all('*', (req,res)=> res.render('erro404', {
    pageTitle:"Page Not Found", 
    err:"invalid url please try again"
}))

module.exports = app