import { Card, Space, Col, Row, Button } from 'antd';
import { useEffect, useState } from 'react';


const ApiFetch = () => {

    const [apiCharacters, setApiCharacters] = useState(null)
    const [notNull, setNotNull] = useState(false)
    
    useEffect(() => {
        const useEffectData = async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            console.log(data)
            setApiCharacters(data)
            setNotNull(true)

        }
        
        useEffectData()

            // .then(response => response.json())
            // .then(data => {
            //     setApiCharacters(data)
            //     setNotNull(true)
            // })
            // .catch(error => {
            //     console.error('Error al obtener:', error);
            // })
    }, [])

    if(!notNull)
    {
        return ( 
            <>
                <h1>Loading...</h1>
            </> 
        )
    }

    const characters = apiCharacters.results

    return ( 
        <>
            
            <Space direction="vertical" size={16}>
                {
                    characters.map(elem => {
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
        </> 
    )
    
}

export default ApiFetch