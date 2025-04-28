const express = require("express")
const app = express()
const db = require("./database/connection")

app.get("/books", function(req, res){
    // logic to fetch from database
    res.json({
        message : "Books fetched successfully"
    })
})

app.post("/books", function(req, res){
    // logic to add book to database goes here
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
