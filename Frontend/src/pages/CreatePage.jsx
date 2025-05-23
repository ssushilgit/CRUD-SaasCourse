import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Form from '../components/Form'


const CreatePage = () => {
    const navigate = useNavigate()

    // first approach
    // const [bookName, setBookName] = useState("")
    // const [bookAuthor, setBookAuthor] = useState("")
    // const [bookPrice, setBookPrice] = useState("")
    // const [bookGenre, setBookGenre] = useState("")

    // second approach
    const [bookDetail, setBookDetail] = useState({
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
        bookGenre: ""
    })

    const handleChange = (e) => {
        // let value = e.target.value // kun value type vako value ma display garxa
        // let name = e.target.name// kun input field ma type vako e.target.name ma display garxa
        let { name, value } = e.target

        setBookDetail({
            ...bookDetail, // agadi store vako value jastako testai rakhne
            [name]: value // bookName : React, bookAuthor : Sushil, bookPrice : 999, bookGenre : Programming
        })
        // console.log(bookDetail)
    }

    const submitData = async (e) => {
        e.preventDefault();
        // console.log("Submitted data")
        // mathi state ma vako data lai api ma pass garne -> post method
        // postt garda duita pathauna paryo , pathaune data ko format always object hunu parxa, jun at the end axios le json ma convert garera pathaidinx
        const response = await axios.post("http://localhost:4000/api/books/", bookDetail) // ka pathaune ra k pathaune compulsary huna paryo
        if (response.status === 200) {

            alert("Book added successfully")
            navigate("/")
        }
        else {
            alert("Book not added")
        }
    }

    return (
        <>
            <Navbar />
            {/* <Form bookName = "Enter Book Name " bookAuthor = "Enter Book Author " bookPrice = "Enter Book Price" bookGenre = "Enter Book Genre" /> */}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={submitData}>
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
                                onChange={handleChange}
                                type="text"
                                name="bookName"
                                id="name"
                                placeholder="Enter book name"
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
                                onChange={handleChange}
                                type="text"
                                name="bookAuthor"
                                id="author"
                                placeholder="Enter book author"
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
                                onChange={handleChange}
                                type="text"
                                name="bookPrice"
                                id="price"
                                placeholder="Enter book price"
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
                                onChange={handleChange}
                                type="text"
                                name="bookGenre"
                                id="genre"
                                placeholder="Enter book genre"
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

export default CreatePage