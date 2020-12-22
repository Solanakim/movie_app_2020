import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";


function Navigation (){
    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>  {/*a tag in react.Router = Link*/}
    </div>
    );
}

export default Navigation;