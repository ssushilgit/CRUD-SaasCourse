const { fetchBooks, addBook, deleteBook, updateBook, singleFetchBook } = require("../controllers/bookController")
const router =require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(updateBook).get(singleFetchBook)

// router.get("/books",fetchBooks)
// router.post("/books",addBook)
// router.delete("/books/:id",deleteBook)

module.exports = router