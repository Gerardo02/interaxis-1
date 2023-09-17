import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const App = lazy(() => import('./App.jsx'))
const Character = lazy(() => import('./character_list'))
const Todo = lazy(() => import('./todo_list'))
const Info = lazy(() => import('./character_info'))
const Counter = lazy(() => import('./context_counter'))
const Formulario = lazy(() => import('./formulario'))



const Router = () => {
    return ( 
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/characters' element={<Character />} />            
            <Route path='/todo' element={<Todo />} />
            <Route path='/characters/info' element={<Info />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/formulario' element={<Formulario />} />
        </Routes>
     );
}
 
export default Router;