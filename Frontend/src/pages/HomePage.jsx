import { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const HomePage = () => {
    const fetchBook = async () =>{
        await axios.get("http://localhost:4000/api/books/")
    }

    useEffect(()=>{
        fetchBook()
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap mx-32">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
             
            </div>
        </>
    )
}

export default HomePage