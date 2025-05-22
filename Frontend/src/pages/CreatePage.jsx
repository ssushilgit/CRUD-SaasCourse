import { useState } from 'react'
import Navbar from '../components/Navbar'
// import Form from '../components/Form'

const CreatePage = () => {
    const [bookName, setBookName] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookPrice, setBookPrice] = useState("")
    const [bookGenre, setBookGenre] = useState("")

    return (
        <>
            <Navbar />
            {/* <Form bookName = "Enter Book Name " bookAuthor = "Enter Book Author " bookPrice = "Enter Book Price" bookGenre = "Enter Book Genre" /> */}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form>
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
                                onChange = {(event)=>setBookName(event.target.value)}
                                type="text"
                                name="name"
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
                                onChange = {(event)=>setBookAuthor(event.target.value)}
                                type="text"
                                name="author"
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
                                onChange = {(event)=>setBookPrice(event.target.value)}
                                type="text"
                                name="price"
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
                                onChange = {(event)=>setBookGenre(event.target.value)}
                                type="text"
                                name="genre"
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