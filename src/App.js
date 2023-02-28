import './App.css';
import Login from './pages/Login';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/components/Users';
import Orders from './pages/components/Orders';
import Usersniveluno from './pages/components/Usersniveluno'
import Usersniveldos from './pages/components/Usersniveldos'
import Usersniveltres from './pages/components/Usersniveltres'
function App() {

  const navigate = useNavigate()
  const goLogin = () => {
    navigate("/Login")
   }
  const goDashboard = () => {
   navigate("/Dashboard")
  }
  return (
    <div>
        <button onMouseOver={goLogin}>
          <Link to="/Login">Login </Link>
        </button>
        <button onMouseOver={goDashboard}>
          <Link to="/Dashboard">Dashboard</Link>  
        </button>
   
      <Routes>
        <Route exact path="/react-dummy" element={<Login />}></Route> 
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />}>
            <Route path='usersniveluno' element={<Usersniveluno />}></Route>
            <Route path='usersniveldos' element={<Usersniveldos />}></Route>
            <Route path='usersniveltres' element={<Usersniveltres />}></Route>
          </Route>
          <Route path="orders" element={<Orders />}></Route> 
        </Route>
      </Routes>
   </div>
  );
}

export default App;


