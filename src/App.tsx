import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './pages/cars/CarList';
import CarAdd from './pages/cars/CarAdd';
import AuthLogin from './pages/authentication/AuthLogin';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path='/cars/list' exact component={CarList} />
            <Route path='/cars/add' exact component={CarAdd} />
            <Route path='/auth/login' exact component={AuthLogin} />
          </Switch>
          <Footer displayTitle />
        </Router>
      </Container>
    );
  }
}

export default App;
