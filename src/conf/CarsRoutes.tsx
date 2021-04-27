import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CarAdd, CarList } from '../pages/cars';

export interface ICarsRoutesProps { }

export interface ICarsRoutesState { }

class CarsRoutes extends React.Component<ICarsRoutesProps, ICarsRoutesState> {
    render() {
        return (

            <Switch>
                <Route path='/cars/list' component={CarList} />
                <Route path='/cars/add' component={CarAdd} />
                <Redirect to='/404' />
            </Switch>

        );
    }
}

export default CarsRoutes;
