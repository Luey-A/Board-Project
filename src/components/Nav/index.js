import React from 'react';
// import "../App.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
        </nav>
    </div>;
};
export default Nav;