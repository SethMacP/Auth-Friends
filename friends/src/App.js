import React from 'react'
import {LoginPage} from './components/LoginPage'
import {Friends} from './components/Friends'
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
              <NavLink href="/friendslist">Friends List</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        
      </Navbar>
    </div>
    
 
        
        <Route path="/" component={LoginPage} />
        <Route path="/friendslist" component={Friends} />
        
     
    </>
  );
}

export default App;
