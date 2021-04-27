import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './conf/MainRoutes';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Router>
          <Header />
          <MainRoutes />
          <Footer displayTitle />
        </Router>
      </Container>
    );
  }
}

export default App;
