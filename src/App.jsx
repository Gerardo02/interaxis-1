import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import './App.css'

function App() {
  

  const navigate = useNavigate()


  const gridStyle = {
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer'
  };

  return (
    <>
      <Card title="Routes" style={{ width: 500 }}>

        <Card.Grid style={gridStyle} onClick={() => navigate('/todo')}>Todo</Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => navigate('/characters')}>Characters</Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => navigate('/counter')}>Counter</Card.Grid>
        
        
      </Card>
      
    </>
  )
}

export default App
