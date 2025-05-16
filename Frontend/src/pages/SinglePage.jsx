import Navbar from '../components/Navbar'
import { Link } from "react-router-dom"

const SinglePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex items-start justify-center pt-6 pb-10 min-h-[calc(100vh-60px)]">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-indigo-700">The Coldest Sunset</h1>

          <div className="text-gray-700 mt-2 space-y-1">
            <p className="text-lg">
              <span className="font-semibold">Author:</span> John Doe
            </p>
            <p className="text-lg">
              <span className="font-semibold">Genre:</span> Fiction / Drama
            </p>
            <p className="text-xl text-green-600 font-bold">
              $14.99
            </p>
          </div>

          <div className="text-gray-600 text-base mt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link to = "/edit-page">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
            </Link>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage
