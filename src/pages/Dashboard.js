import React from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()

    const goUsers = () => {
        navigate("/Dashboard/Users")
    }
    const goOrders = () => {
        navigate("/Dashboard/Orders")
    }
    return (
        <div >
            <h1>Bienvenido al dashboard</h1>
            <p>React router dom</p>
            <hr />
            <div>
              <button onMouseOver={goUsers}>
                <Link to="/Dashboard/Users">Users </Link>
              </button>
              <button onMouseOver={goOrders}>
                <Link to="/Dashboard/Orders">Orders</Link>  
              </button>
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard;