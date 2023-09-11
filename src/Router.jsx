import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const App = lazy(() => import('./App.jsx'))
const Character = lazy(() => import('./character_list'))
const Todo = lazy(() => import('./todo_list'))


const Router = () => {
    return ( 
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/characters' element={<Character />} />            
            <Route path='/todo' element={<Todo />} />
        </Routes>
     );
}
 
export default Router;