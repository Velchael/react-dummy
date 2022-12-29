import React from 'react';
import { Link, Outlet} from 'react-router-dom';
const Dashboard = () => {
    return (
        <div >
            <h1>Bienvenido al dashboard</h1>
            <p>React router dom</p>
            <hr />
            <div>
             <Link to="/Dashboard/Users">Users </Link>
             <Link to="/Dashboard/Orders">Orders</Link>
             
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard;