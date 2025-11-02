import './App.css';
import Home from './Pages/home.jsx'
import About from './Pages/about.jsx'
import Contat from './Pages/contact.jsx'
import Nav from './Components/nav.jsx'
import Users from './Pages/users.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
      <Router>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Router>

  )
}

export default App;
