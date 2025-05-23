import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

const SinglePage = () => {
  const navigate = useNavigate()
  const { id } = useParams() // use to get parameter of the route
  // console.log(id)
  const [book, setBook] = useState({})

  const singleFetchBook = async () => {
    const response = await axios.get(`http://localhost:4000/api/books/${id}`)
    setBook(response.data.datas)
  }

  useEffect(() => {
    singleFetchBook()
  }, [])

  // console.log(singleBook)

  const deleteBook = async () => {
    const response = await axios.delete(`http://localhost:4000/api/books/${id}`)
    if (response.status === 200) {
      // home page ma navigation gardim
      navigate("/")
    } else {
      alert("Something went wrong")
    }
  }


  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex items-start justify-center pt-6 pb-10 min-h-[calc(100vh-60px)]">

        <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-indigo-700"> {book.bookName}</h1>

          <div className="text-gray-700 mt-2 space-y-1">
            <p className="text-lg">
              <span className="font-semibold">Author:</span> {book.bookAuthor}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Genre:</span> {book.bookGenre}
            </p>
            <p className="text-xl text-green-600 font-bold">
              RS {book.bookPrice}
            </p>
          </div>



          <div className="flex gap-4 pt-4">
            
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
            
            <button onClick={deleteBook} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage
