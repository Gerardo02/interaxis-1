import { useState } from 'react'
import Formulario from './Formulario.jsx'
import TodoList from './TodoList.jsx'
import TodoItem from './TodoItem.jsx'
import ApiFetch from './ApiFetch.jsx'
import { Button, Input, Row, Col, Form } from 'antd'
import './App.css'

function App() {
  //const [todos, setTodos] = useState(["Trabajar", "Comer", "Dormir"])

  return (
    <>

      <ApiFetch />


      {/*
      <TodoItem setTodos={setTodos}/>

      <Row>
        <Col span={16} offset={4}>
          <TodoList todos={todos} setTodos={setTodos}/>
        </Col>
          
      </Row>
      */}
    </>
  )
}

export default App
