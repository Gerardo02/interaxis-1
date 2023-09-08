import { Form, Button, Input, Row, Col } from 'antd'

const TodoItem = ({setTodos}) => { 
    return(
        <>
            <Form 
                initialValues={{ todoListAdd: "" }} 
                onFinish={value => setTodos((originalArray) => {
                    if(value.todoListAdd !== "") return [...originalArray, value.todoListAdd]
                    else return [...originalArray]

                    })}>

                <Row>
                    <Col span={20}>
                        <Form.Item name="todoListAdd">
                        <Input />

                        </Form.Item>
                        
                    </Col>

                    <Col span={4}>
                        <Form.Item>
                        <Button type='primary' htmlType='submit' >
                            Add
                        </Button>

                        </Form.Item>
                        
                    </Col>
                </Row> 

            </Form>
        </>
    ) 
}

export default TodoItem