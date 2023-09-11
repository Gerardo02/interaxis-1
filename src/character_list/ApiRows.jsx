import { Card, Space, Col, Row, Button } from 'antd';

const ApiRows = ({ response1, response2, response3 }) => {


    return(
        <>
            <Row gutter={16}>
                <Col>
                    <Space direction="vertical" size={16}>
                        {
                            response1.map(elem => {
                                return (
                                    <Card key={elem.id} title={elem.name}>
                                        <img src={elem.image} alt={elem.name} />
                                        <p>Gender: <i>{elem.gender}</i></p>
                                        <p>Status: {elem.status}</p>
                                        <p>Species: {elem.species}</p>
                                        <p>Created: {elem.created}</p>
                                        
                                    </Card>
                                )
                            })
                        }
                    </Space>

                </Col>

                <Col>
                    <Space direction="vertical" size={16}>
                        {
                            response2.map(elem => {
                                return (
                                    <Card key={elem.id} title={elem.name}>
                                        <img src={elem.image} alt={elem.name} />
                                        <p>Gender: <i>{elem.gender}</i></p>
                                        <p>Status: {elem.status}</p>
                                        <p>Species: {elem.species}</p>
                                        <p>Created: {elem.created}</p>
                                        
                                    </Card>
                                )
                            })
                        }
                    </Space>

                </Col>

                <Col>
                    <Space direction="vertical" size={16}>
                        {
                            response3.map(elem => {
                                return (
                                    <Card key={elem.id} title={elem.name}>
                                        <img src={elem.image} alt={elem.name} />
                                        <p>Gender: <i>{elem.gender}</i></p>
                                        <p>Status: {elem.status}</p>
                                        <p>Species: {elem.species}</p>
                                        <p>Created: {elem.created}</p>
                                        
                                    </Card>
                                )
                            })
                        }
                    </Space>

                </Col>
            </Row>
        </>
    )

}

export default ApiRows