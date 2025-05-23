import Navbar from '../components/Navbar'
import Form from '../components/Form'

const EditPage = () => {
    return (
        <>
            <Navbar />
            {/* <Form bookName = "Enter Updated Book Name " bookAuthor = "Enter Updated Book Author " bookPrice = "Enter Updated Book Price" bookGenre = "Enter Updated Book Genre" /> */}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form >
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