import React from 'react'
import {LoginPage} from './components/LoginPage'
import {Friends} from './components/Friends'
import {AddFriend} from './components/AddFriend'
import {Route} from 'react-router-dom'

import {Navbar,NavbarBrand,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';

import './App.css'

function App() {



  return (
    <>
    <div>
    <Navbar color="info" light  expand="md">
        <NavbarBrand to="/">Friends App</NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/friendsList">Friends List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/manageFriends">Manage Friends</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>This assignment is tough!</NavbarText>
        
      </Navbar>
    </div>
    
 
        
        <Route path="/login" component={LoginPage} />
        <Route path="/manageFriends" component={AddFriend} />
        <Route path="/friendsList" component={Friends} />
     
    </>
  );
}

export default App;
