import Card from "../components/Card"
import Navbar from "../components/Navbar"
import SinglePage from "./SinglePage"

const HomePage = () => {
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