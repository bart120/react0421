import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Spinner } from 'reactstrap';
//import AuthLogin from '../pages/authentication/AuthLogin';
//import { CarAdd, CarList } from '../pages/cars';


import Home from '../pages/home/Home';
import NotFound from '../pages/home/NotFound';

const login = React.lazy(() => import('../pages/authentication/AuthLogin'));
const cars = React.lazy(() => import('./CarsRoutes'));


export interface IMainRoutesProps { }

export interface IMainRoutesState { }

class MainRoutes extends React.Component<IMainRoutesProps, IMainRoutesState> {
    render() {
        return (
            <Suspense fallback={this.spinner}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/cars' component={cars} />
                    <Route path='/auth/login' exact component={login} />
                    <Route path='/404' component={NotFound} />
                    <Redirect to='404' />
                </Switch>
            </Suspense>
        );
    }

    spinner = (
        <div>
            <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
        </div>
    );

}

export default MainRoutes;
