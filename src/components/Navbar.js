import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function Navbar(props) {
    const history = useHistory();

    return (
        <div>
            <ul className="navbar">
                <li><NavLink activeClassName="active-page" exact to="/">Home</NavLink></li>
                <li>{props.authenticated ?
                    <NavLink activeClassName="active-page" className="authenticated" exact to="/blogposts">Blogpost
                        overzicht</NavLink> : null}</li>
                <li>{props.authenticated ? <button onClick={() => {
                    props.handler(false);
                    history.push("/")

                }}>Uitloggen</button> : <NavLink activeClassName="active-page" exact to="/login">Login</NavLink>}</li>


            </ul>

        </div>
    );
}

export default Navbar;