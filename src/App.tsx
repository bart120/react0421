import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Header from './core/components/layout/Header';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
