import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="pagina1">Pagina1</Link></li>
                    <li><Link to="pagina2">pagina2</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </React.Fragment>
    );
};

export default Layout;