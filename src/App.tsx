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
import Twitter from './components/twitter-feed/twitter';

function App() {
 const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab:string) => {
    if(activeTab !== tab) setActiveTab(tab);
  }

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
              <NavLink
              /*className={classnames({ active: activeTab === '1' })} */
              onClick={() => { toggle('1');}}
              >
              Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              onClick={() => { toggle('2');}}
              >
              E-Juice
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              onClick={() => { toggle('3');}}
              >
              Coupon
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              onClick={() => { toggle('4');}}
              >
              About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              onClick={() => { toggle('5');}}
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
              </Switch>
            </Col>
          </Row>
      </Container>
    </Router>
  );
}

export default App;
