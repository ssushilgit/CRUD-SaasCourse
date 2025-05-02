const express = require("express")
const { fetchBooks, addBook, deleteBook, updateBook } = require("./controllers/book.controller")
// const { books } = require("./database/connection")
const app = express()
require("./database/connection")
app.use(express.json()) // for handling post request - telling express to parse the data

app.get("/books", fetchBooks)
app.post("/books", addBook)
app.delete("/books/:id", deleteBook)
app.patch("/books/:id", updateBook)

app.listen(4000, function(){
    console.log("crud backend project running on port 4000")
})


 
