import React, { useState } from "react";

const Navigation = (props) => {
    const [auth, setAuth] = useState(false);
    const [login, setLogin] = useState("Logged Out");
    const [butt, setButt] = useState("Log In");

    const authenticate = () => {
        if(auth===false){
            setAuth(true);
            setLogin("Logged In");
            setButt('Log Out');
        }

        else if (auth===true){
            setAuth(false);
            setLogin("Logged Out");
            setButt('Log In');
        }
    }
    return (

    <nav>
        <h1 className="header">WEPR1 Formative Assessment 1 by {props.name}</h1><br></br>
        <button onClick={authenticate}>{butt}</button>
        <p>{login}</p>

    </nav>
);
}

export default Navigation; 

