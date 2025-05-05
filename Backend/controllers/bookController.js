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


exports.deleteBook = async function(req, res){
    // get book id
    // const id = req.body.id // id can be brought from body as well
    const id = req.params.id // link ma vako id ho req.params.id wala

    // logic to delete book 
    await books.destroy({
        where : {
            id : id // books table ko id : mathi ako id
        }
    })
    res.json({
        message : "Book deleted successfully"
    })
}

exports.updateBook = async function(req,res){
    // kun id ko data update garne
    const id = req.params.id

    // update garne logic
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.update({
        bookName : bookName, // columnName : valueName
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
    }, {
        where : {
            id : id
        }
    })
    // in mongoose, books.findByIdAndUpdate(id, {})
    res.json({
        message : "Book updated successfully"
    })
}

exports.singleFetchBook = async function(req, res){
    const id = req.params.id
    const datas = await books.findByPk(id) // returns object
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // })
    res.json({
        message : "Single book fetched successfully",
        datas
        // datass 
    })
}

// module.exports = {fetchBooks, addBook, deleteBook, updateBook}
