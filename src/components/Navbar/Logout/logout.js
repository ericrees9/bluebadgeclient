import React from "react";
import "./logout.css";
import { Logout } from "grommet-icons";

const LogoutBtn = (props) => {
    return(
        props.token ? 
        <Logout size="large" alt="logout" onClick={ props.clearToken } />
        : null
    )
}

export default LogoutBtn;