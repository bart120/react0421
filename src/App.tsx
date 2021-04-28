import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './conf/MainRoutes';
import { Provider } from 'react-redux';
import store from './core/redux/store';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router>
            <Header />
            <MainRoutes />
            <Footer displayTitle />
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;
