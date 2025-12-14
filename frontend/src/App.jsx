import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Success from './Pages/Success'


const App = () => {
  return <Router>
    <Routes>
      <Route path = "/" element= {<Home></Home>}></Route>
      <Route path = "/success" element= {<Success></Success>}></Route>
      <Route path = "*" element= {<NotFound></NotFound>}></Route>
    </Routes>
  </Router>
   
  
}

export default App