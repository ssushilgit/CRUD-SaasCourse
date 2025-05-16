import React from 'react'
import { Link } from 'react-router-dom'
import crudImage from '../assets/CRUD.jpeg'

const Navbar = () => {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <img
                                src={crudImage}
                                alt="CRUD Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="md:flex md:items-center md:gap-12">
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link to="/create-page">
                                    <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-700">
                                        + Create
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile Menu Icon */}
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
