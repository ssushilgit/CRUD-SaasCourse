import { Link } from "react-router-dom"

const Card = () => {
    return (
        <>
            <Link to="/single-page">
                <div className="flex px-3 py-3">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">

                        <div className="px-6 py-4 space-y-2">
                            <h2 className="text-2xl font-bold text-indigo-700">The Coldest Sunset</h2>

                            <p className="text-sm text-gray-500">
                                <span className="font-medium text-gray-700">Author:</span> John Doe
                            </p>

                            <p className="text-sm text-gray-500">
                                <span className="font-medium text-gray-700">Genre:</span> Fiction / Drama
                            </p>

                            <p className="text-lg font-semibold text-green-600">
                                $14.99
                            </p>
                        </div>

                        <div className="px-6 py-4 flex gap-3">
                           
                                <button className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 hover:bg-blue-200 transition">
                                    ✏️ Edit
                                </button>
                            <button className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-200 transition">
                                🗑️ Delete
                            </button>
                        </div>

                    </div>
                </div>
            </Link>

        </>
    )
}

export default Card