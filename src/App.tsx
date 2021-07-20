import React from 'react';
import logo from './assets/img/evolution_vaporz_nashville001008.jpg';
import {Jumbotron, Container } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container className="">
      <Jumbotron className="">
        <img src={logo} />
      </Jumbotron>
    </Container>
  );
}

export default App;
