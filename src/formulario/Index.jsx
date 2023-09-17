import Formulario from "./Formulario.jsx";
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const navigate = useNavigate()
    
    return ( 
        <>
            <Button 
                    type='link'
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate('/')}
                >
                    Regresar
            </Button>
            <Formulario />
        </>
     );
}
 
export default Index;