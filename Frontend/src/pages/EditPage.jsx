import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'


const EditPage = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})

    const singleFetchBook = async () => {
        const response = await axios.get(`http://localhost:4000/api/books/${id}`)
        setBook(response.data.datas)
    }

    useEffect(() => {
        singleFetchBook()
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target
        setBook({
            ...book,
            [name]: value
        })
    }
    // console.log(book, "book ho ")

    const editBook = async (e) =>{
        e.preventDefault()
        const response = await axios.patch("http://localhost:4000/api/books/" +id , book)
        if(response.status === 200){
            alert("Book edited successfully")
        } else {
            alert("Book not edited")
        }
    }

    return (
        <>
            <Navbar />
            {/* <Form bookName = "Enter Updated Book Name " bookAuthor = "Enter Updated Book Author " bookPrice = "Enter Updated Book Price" bookGenre = "Enter Updated Book Genre" /> */}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={editBook}>
                        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Enter book details
                        </h1>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Book Name
                            </label>
                            <input
                                type="text"
                                name="bookName"
                                value={book.bookName}
                                onChange={handleChange}
                                id="name"
                                placeholder="Enter updated book name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Book Author
                            </label>
                            <input
                                type="text"
                                name="bookAuthor"
                                value={book.bookAuthor}
                                onChange={handleChange}
                                id="author"
                                placeholder="Enter updated book author"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Book Price
                            </label>
                            <input
                                type="text"
                                name="bookPrice"
                                value={book.bookPrice}
                                onChange={handleChange}
                                id="price"
                                placeholder="Enter updated book price"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Book Genre
                            </label>
                            <input
                                type="text"
                                name="bookGenre"
                                value={book.bookGenre}
                                onChange={handleChange}
                                id="genre"
                                placeholder="Enter updated book genre"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditPage