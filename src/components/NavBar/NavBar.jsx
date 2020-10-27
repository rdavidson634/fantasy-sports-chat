import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  
  let nav = props.user ?
    <div>
      <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
  
    :
    <div>
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>CREATE ACCOUNT</NavLink>
    </div>;
    
   

  return (
    <div className='NavBar'>
      {nav}
    </div>

  );
};

export default NavBar;