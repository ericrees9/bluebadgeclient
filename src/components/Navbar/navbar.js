import React from "react";
import "./navbar.css";
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LogoutBtn from "./LogoutBtn/logoutBtn";

const Navbar = (props) => {
    return(
        // <Router>
            <nav>
                <h1>iwasthere</h1>
                <LogoutBtn clearToken={ props.logout } token={ props.tokenStatus } />
            </nav>
        // {/* </Router> */}
    )
}

export default Navbar;