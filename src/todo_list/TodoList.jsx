import { Divider, List, Button, Row, Col } from 'antd'


const TodoList = ({todos, setTodos}) => { 

    const deleteTodo = (id) => {
        const newTodos = [...todos]
        newTodos.splice(id, 1)
        setTodos(newTodos)
        
    }
    
    
    return(
        <>
            <List 
                size="large"
                grid={{ column: 1 }}
                header={<div className='header'>Todo List</div>}
                bordered
                dataSource={todos}
                renderItem={(item, index) => 
                    {
                        return(
                            <List.Item>
                                
                                <Row>
                                    <Col span={4}>
                                        {item}
                                    </Col>
                                    
                                    <Col span={4} offset={12}>
                                        <Button size='small' onClick={() => deleteTodo(index)}>Borrar</Button>
                                    </Col>
                                </Row>
                            
                            </List.Item>
                            
                        )

                    }
                    
                }
                
            />
                
            
        </>
    )

}

export default TodoList