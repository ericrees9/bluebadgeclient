import React from "react";
import "./logoutBtn.css";
//import { Layer } from "grommet";
import { Logout } from "grommet-icons";

const LogoutBtn = (props) => {
    // const [ show, setShow ] = useState(false)

    // let openSnackbar = () => {
    //     if(show === false){
    //         setShow(true)
    //     } else {
    //         setShow(false)
    //     }
    // }
    
    return(
        props.token ? <Logout size="large" alt="logout" onClick={ props.clearToken } /> : null
    )
}

export default LogoutBtn;