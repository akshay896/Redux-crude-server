
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Read from './Pages/Read'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Add/>} path='/add'/>
      <Route element={<Read/>} path='/read'/>
    </Routes>
    </>
  )
}

export default App
