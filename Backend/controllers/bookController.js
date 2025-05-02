const { books } = require("../database/connection")

exports.fetchBooks = async function(req, res){
    // logic to fetch from database
    const datas = await books.findAll() // select * from books // findAll() returns value in the form of array
    res.json({
        message : "Books fetched successfully",
        datas : datas // datas - you can write only once if both key and value are same // key : value
    })
}

exports.addBook = async function(req, res){
    // logic to add book to database goes here
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName : bookName, // columnName : value
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
    })
    res.json({
        message : "Books added successfully"
    }) 
}


exports.deleteBook = function(req, res){
    // logic to delete book
    res.json({
        message : "Book deleted successfully"
    })
}

exports.updateBook =  function(req,res){
    // logic to update book
    res.json({
        message : "Book updated successfully"
    })
}

// module.exports = {fetchBooks, addBook, deleteBook, updateBook}
