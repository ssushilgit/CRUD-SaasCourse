const { fetchBooks, addBook, deleteBook, updateBook } = require("../controllers/bookController")
const router =require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/book/:id").delete(deleteBook).patch(updateBook)

// router.get("/books",fetchBooks)
// router.post("/books",addBook)
// router.delete("/books/:id",deleteBook)

module.exports = router