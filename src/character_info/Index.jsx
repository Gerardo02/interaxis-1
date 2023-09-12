import CharacterPage from "./CharacterPage.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from "antd";

const Index = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const image = location.state.img
    const name = location.state.name
    const id = location.state.id
    const status = location.state.status
    const species = location.state.species
    const type = location.state.type
    const created = location.state.create
    const gender = location.state.gender

    const data = {
        id: id, 
        name: name,
        img: image,
        status: status,
        species: species,
        type: type,
        create: created,
        gender: gender
    }

    console.log(location.state.img);

    return ( 
        <>
            <Button 
                type='link'
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate('/characters')}
            >

                Regresar
            </Button>
            <CharacterPage 
                data={data}
            />
        </>
     );
}
 
export default Index;