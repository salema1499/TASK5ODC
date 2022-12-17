//const req = require("express/lib/request")
//const Book=require("../../model/book.model")
const router=require("express").Router()
const bookcontrol=require("../controller/books.control")
router.get("/", bookcontrol.allbooks)
router.get("/add",bookcontrol.addbook)
router.post("/addLogicbook",bookcontrol.addLogicbook)
router.get("/del/:id", bookcontrol.delbook)
router.get("/search/:name-book", bookcontrol.searchbook)

router.get("/edit/:id", bookcontrol.editbook)
router.post("/edit/:id", bookcontrol.editlogicbook)


module.exports=router