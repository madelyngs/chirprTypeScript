import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="nav p-2 shadow justify-content-end align-items center">
            <NavLink className="p-2 mx-2" activeClassName="p-2 mx-2 border-dark border-bottom" exact to='/'>Generic a** Homepage</NavLink>
            <NavLink className="p-2 mx-2" activeClassName="p-2 mx-2 border-dark border-bottom" exact to='/compose'>Create a Chirp Here!!!</NavLink>
        </nav>
    );
};

interface NavbarProps {};

export default Navbar;