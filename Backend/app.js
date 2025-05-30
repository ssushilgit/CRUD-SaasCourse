const express = require("express")
// const { fetchBooks, addBook, deleteBook, updateBook } = require("./controllers/bookController")
const app = express()
require("./database/connection")
app.use(express.json()) 
const bookRoute = require("./routes/bookRoute")

const cors = require("cors")
app.use(cors({
    origin :"http://localhost:5173"
    // origin :[ "*"] - every link can use this
}))

// app.get("/books", fetchBooks)
// app.post("/books", addBook)
// app.delete("/books/:id", deleteBook)
// app.patch("/books/:id", updateBook)

app.use("/api/", bookRoute)

app.listen(4000, function(){
    console.log("crud backend project running on port 4000")
})


 
