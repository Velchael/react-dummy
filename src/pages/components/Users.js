import * as React from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';
const Users = () => {
    const navigate = useNavigate()

    const goUsersniveluno = () => {
        navigate("/Dashboard/Users/Usersniveluno")
    }
    const goUsersniveldos = () => {
        navigate("/Dashboard/Users/Usersniveldos")
    }
    const goUsersniveltres = () => {
        navigate("/Dashboard/Users/Usersniveltres")
    }
    return (
        <div >
        <h1>Niveles de usuario</h1>
        <p>Subruta 3</p>
        <hr />
        <div>
              <button onMouseOver={goUsersniveluno}>
                <Link to="/Dashboard/Users/Usersniveluno">Usersniveluno</Link>
              </button>
              <button onMouseOver={goUsersniveldos}>
                <Link to="/Dashboard/Users/Usersniveldos">Usersniveldos</Link>
              </button>
              <button onMouseOver={goUsersniveltres}>
               <Link to="/Dashboard/Users/Usersniveltres">Usersniveltres</Link>
              </button>
         </div>
         <Outlet /> 
        </div>
    )
}

export default Users;