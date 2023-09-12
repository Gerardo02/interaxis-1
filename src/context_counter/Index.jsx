import { useNavigate } from "react-router-dom";
import Counter from "./Counter.jsx";
import { Button, Row, Col } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useCounterStore } from "./store.js";

const Index = () => {
    const navigate = useNavigate()
    const { count } = useCounterStore()

    return ( 
        <>
            <Button 
                type='link'
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate('/')}
            >
                Regresar
            </Button>
            <h1>{ count }</h1>
            <Counter />
        </>
     );
}
 
export default Index;