import React, { useState } from 'react';
import logo from './assets/img/evolution_vaporz_nashville001008.jpg';
import {
  Jumbotron,
  Container,
  TabContent,
  TabPane,
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col  
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './components/Homepage/home';
import Ejuice from './components/e-juice/ejuice';
import Twitter from './components/twitter-feed/twitter';

function App() {
  return (
    <Router>
      <Container className="">
        <Jumbotron className="col-md-12">
          <img src={logo}
            style={{width: '100%'}}
         />
        </Jumbotron>
        <Nav tabs style={{justifyContent: 'center'}}>
            <NavItem >
              <NavLink href="/">
              Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/e-juice">
              E-Juice
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              >
              Coupon
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              >
              About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              >
              Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Row>
            <Col md="4">
              <Twitter />
            </Col>
            <Col md="8">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/e-juice">
                  <Ejuice />
                </Route>
              </Switch>
            </Col>
          </Row>
      </Container>
    </Router>
  );
}

export default App;
