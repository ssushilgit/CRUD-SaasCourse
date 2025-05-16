import Navbar from '../components/Navbar'
import Form from '../components/Form'

const EditPage = () =>{
    return (
        <>
            <Navbar/>
              <Form bookName = "Enter Updated Book Name " bookAuthor = "Enter Updated Book Author " bookPrice = "Enter Updated Book Price" bookGenre = "Enter Updated Book Genre" />
        </>
    )
}

export default EditPage