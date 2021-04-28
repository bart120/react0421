import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PrivateRoute from '../core/components/PrivateRoute';
import { CarAdd, CarList } from '../pages/cars';
import CarDetail from '../pages/cars/CarDetail';

export interface ICarsRoutesProps { }

export interface ICarsRoutesState { }

class CarsRoutes extends React.Component<ICarsRoutesProps, ICarsRoutesState> {
    render() {
        return (

            <Switch>
                <Route path='/cars/list' component={CarList} />
                <PrivateRoute path='/cars/add' component={CarAdd} />
                <Route path='/cars/detail/:id' component={CarDetail} />
                <Redirect to='/404' />
            </Switch>

        );
    }
}

export default CarsRoutes;
