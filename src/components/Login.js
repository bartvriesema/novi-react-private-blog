import React from 'react';
import {useHistory} from "react-router-dom";

function Login(props) {
    const history = useHistory();

    function gotoOverview() {
        props.handler(true);
        history.push("/blogposts");
    }

    return (
        <div className="main-content">
            <h1>Login pagina</h1>
            <button onClick={() => gotoOverview()}>Login</button>
        </div>
    );
}

export default Login;