/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export const StyledNavbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }>
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
                to='/about'>
                About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
                to='/products'>
                Products
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
                to='/login'>
                Login
            </NavLink>
        </nav>
    );
};
// ({ isActive }) => {
//     return { color: isActive ? "link active" : "link" };
// }
