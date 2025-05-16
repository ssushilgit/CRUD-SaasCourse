import Navbar from '../components/Navbar'
import Form from '../components/Form'

const CreatePage = () => {
    return (
        <>
            <Navbar/>
            <Form bookName = "Enter Book Name " bookAuthor = "Enter Book Author " bookPrice = "Enter Book Price" bookGenre = "Enter Book Genre" />
        </>
    )
}

export default CreatePage