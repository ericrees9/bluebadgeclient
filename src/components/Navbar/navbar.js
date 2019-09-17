import React from "react";
import "./navbar.css";
import LogoutBtn from "./Logout/logout";

const Navbar = (props) => {
    return(
        <nav>
            <h1>iwasthere</h1>
            <LogoutBtn clearToken={ props.logout } token={ props.tokenStatus } />
        </nav>
    )
}

export default Navbar;