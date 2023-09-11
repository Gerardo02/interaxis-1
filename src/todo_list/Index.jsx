import TodoItem from './TodoItem.jsx'
import TodoList from './TodoList.jsx'
import { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Index = () => {

    const [todos, setTodos] = useState(["Trabajar", "Comer", "Dormir"])
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

            <TodoItem setTodos={setTodos}/>

            <Row>
                <Col span={16} offset={4}>
                    <TodoList todos={todos} setTodos={setTodos}/>
                </Col>
                
            </Row>
        </>
     );
}
 
export default Index;