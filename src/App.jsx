
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  

  return (
    <>
     
      <Router>
        {/* <Routes> */}
          {/* <Route path='/login' element={<Login />} />
          <Route path='/resister' element={Register} />
          <Route path='/' element={<Home />} />
        </Routes> */}
      </Router>
     
    </>
  )
}

export default App
