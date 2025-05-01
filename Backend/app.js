const express = require("express")
const { books } = require("./database/connection")
const app = express()
require("./database/connection")
app.use(express.json()) // for handling post request - telling express to parse the data

app.get("/books",async function(req, res){
    // logic to fetch from database
    const datas = await books.findAll() // select * from books // findAll() returns value in the form of array
    res.json({
        message : "Books fetched successfully",
        datas : datas // datas - you can write only once if both key and value are same // key : value
    })
})

app.post("/books", async function(req, res){
    // logic to add book to database goes here

    // console.log(req.body)
    // const bookName = req.body.bookName
    // const price = req.body.bookPrice
    // console.log(bookName)
    // console.log(price)

    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName : bookName,
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
    })
    res.json({
        message : "Books added successfully"
    }) 
})

app.delete("/books/:id", function(req, res){
    // logic to delete book
    res.json({
        message : "Book deleted successfully"
    })
})

app.patch("/books/:id", function(req,res){
    // logic to update book
    res.json({
        message : "Book updated successfully"
    })
})

app.listen(4000, function(){
    console.log("crud backend project running on port 4000")
})

 
// postgresql //postgres.gkzoloxnfeyipmcfdudh:vyas2damaulitanahun@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
