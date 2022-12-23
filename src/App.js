import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Home from './Home'
import Services from './Services'
import Loginpage from './Loginpage'


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
<Route path='/'element={<Home/>}/>
<Route path='/login' element={<Loginpage/>}/>

<Route path='/services'element={<Services/>}/>
      </Routes>
    </Router>
  
    </>
  )
}

export default App