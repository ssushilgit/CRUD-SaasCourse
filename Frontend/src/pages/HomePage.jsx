import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const HomePage = () => {
    const [books, setBooks] = useState([])
    const fetchBook = async () => {
        const response = await axios.get("http://localhost:4000/api/books/")
        setBooks(response.data.datas)
    }

    useEffect(() => {
        fetchBook()
    }, [])

    // console.log(books)

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap mx-32 gap-6 my-6">
                {
                    books.map(function (book, index) {
                        return (
                            <Card key={index} book={book} />
                        )
                    })
                }
            </div>
        </>
    )

}

export default HomePage