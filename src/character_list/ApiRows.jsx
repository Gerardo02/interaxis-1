import { Card, Space, Col, Row, Image } from 'antd';
import { useNavigate } from 'react-router-dom'

const ApiRows = ({ response1, response2, response3 }) => {

    const navigate = useNavigate()

    return(
        <>
            <Row gutter={16}>
                <Col>
                    <Space direction="vertical" size={16}>
                        {
                            response1.map(elem => {
                                return (
                                    <Card key={elem.id} title={elem.name}>
                                        <Image 
                                            src={elem.image}
                                            style={{ cursor: 'pointer' }} 
                                            alt={elem.name} 
                                            preview={false} 
                                            onClick={() => navigate('/characters/info', 
                                            { 
                                                state:{ 

                                                    id: elem.id, 
                                                    name: elem.name,
                                                    img: elem.image,
                                                    status: elem.status,
                                                    species: elem.species,
                                                    type: elem.type,
                                                    create: elem.created,
                                                    gender: elem.gender 
                                                } 
                                            })} 
                                        />

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
                                        <Image 
                                            src={elem.image}
                                            style={{ cursor: 'pointer' }} 
                                            alt={elem.name} 
                                            preview={false} 
                                            onClick={() => navigate('/characters/info', 
                                            { 
                                                state:{ 

                                                    id: elem.id, 
                                                    name: elem.name,
                                                    img: elem.image,
                                                    status: elem.status,
                                                    species: elem.species,
                                                    type: elem.type,
                                                    create: elem.created,
                                                    gender: elem.gender 
                                                } 
                                            })} 
                                        />
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
                                        <Image 
                                            src={elem.image}
                                            style={{ cursor: 'pointer' }} 
                                            alt={elem.name} 
                                            preview={false} 
                                            onClick={() => navigate('/characters/info', 
                                            { 
                                                state: { 

                                                    id: elem.id, 
                                                    name: elem.name,
                                                    img: elem.image,
                                                    status: elem.status,
                                                    species: elem.species,
                                                    type: elem.type,
                                                    create: elem.created,
                                                    gender: elem.gender 
                                                } 
                                            })} 
                                        />
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