const dealHelper=require("../helper/dealWithJson")
const dataHelper=require("../helper/dataHelper")

const Book=require("../../model/book.model")
class controlbook{

    static allbooks = (req, res)=>{
        Book.find({},(err,result)=>{
            if(err){
                console.log(err)
                res.redirect("/")
            
            }console.log(result)
        })
        // const books = dealHelper.readFromJSON()
        // res.render("allBooks", {
        //     pageTitle: "All Books", 
        //     books, 
        //     hasBooks: books.length
        // })
    }
   
    static addbook=(req,res)=>{
        res.render("addBooks",{
            pageTitle:"ADDBOOKS"
        })
    }
//mongoose
    static addLogicbook=(req,res)=>{
       
        const book=new Book({
            namebook:req.body.name_book,
            nameauthor:req.body.name_author,
            pages:req.body.num_pages
        })

        book.save((result,err)=>{
            if(err){
                console.log(err)
                res.redirect("/")
                return
            }
            console.log(result)
            res.render("/")
        })
        // const all = dealHelper.readFromJSON()
        // const book2 = {id:all.length+1, ...req.body}
        // all.push(book2)
        // dealHelper.writeToJSON(all)
        // res.redirect("/")
    }
    static delbook = (req, res)=>{    
        const all = dealHelper.readFromJSON()
        const bookIndex = dataHelper.getId(all, "id", req.params.id)
        if(bookIndex!=-1) all.splice(bookIndex, 1)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    static searchbook=(req,res)=>{
        const all = dealHelper.readFromJSON()
         const data = all.filter(book=> book.name-book==req.params.name-book)
       // const bookIndex = dataHelper.getId(all, "id", req.params.name-book)
       // bookIndex?bookIndex=req.params.name-book:"alert alert-success"
       if(data)
         res.render("search",{data:all[data]})
         return data
    }

    static editbook = (req, res)=>{
        const all = dealHelper.readFromJSON()
        const result = dataHelper.getId(all, "id", req.params.id)
        res.render("edit", {
            pageTitle: "edit page",
            result: all[result]
        })    
    }

    static editlogicbook = (req,res)=>{
        const all = dealHelper.readFromJSON()
        const result = dataHelper.getId(all, "id", req.params.id)
        //if(result==-1) return res.render("err404", {pageTitle:"invalid", err:"invalid id"})
        const newbook = {id: req.params.id,...req.body}
        // newTask.status=="on"? newTask.status=true : newTask.status=false
         all[result] = newbook
       dealHelper.writeToJSON(all)
       res.redirect("/")
    }

}

module.exports=controlbook