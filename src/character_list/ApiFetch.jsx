import ApiRows from './ApiRows.jsx';
import { useEffect, useState } from 'react';


const ApiFetch = () => {

    const [apiCharacters, setApiCharacters] = useState(null)
    const [apiCharacters2, setApiCharacters2] = useState(null)
    const [apiCharacters3, setApiCharacters3] = useState(null)
    

    const [notNull, setNotNull] = useState(false)
    
    useEffect(() => {
        const useEffectData = async () => {

            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data1 = await response.json()

            const response2 = await fetch('https://rickandmortyapi.com/api/character?page=2')
            const data2 = await response2.json()

            const response3 = await fetch('https://rickandmortyapi.com/api/character?page=3')
            const data3 = await response3.json()


            setApiCharacters(data1)
            setApiCharacters2(data2)
            setApiCharacters3(data3)
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
    const characters2 = apiCharacters2.results
    const characters3 = apiCharacters3.results

    return ( 
        <>

            <ApiRows 
                response1={characters} 
                response2={characters2} 
                response3={characters3} 
            />
            
            
        </> 
    )
    
}

export default ApiFetch