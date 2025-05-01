// books, bookName, bookPrice, bookAuthor, bookGenre
const bookModel = (sequelize, DataTypes) =>{
    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING,
        },
        bookGenre : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
    return Book
}

module.exports = bookModel //bookModel is exported