import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Header />
        <Footer displayTitle />
      </Container>
    );
  }
}

export default App;
