import React from 'react';
import { Route, Switch } from 'react-router';
import { CarAdd, CarList } from '../pages/cars';

export interface ICarsRoutesProps { }

export interface ICarsRoutesState { }

class CarsRoutes extends React.Component<ICarsRoutesProps, ICarsRoutesState> {
    render() {
        return (

            <Switch>
                <Route path='/cars/list' component={CarList} />
                <Route path='/cars/add' component={CarAdd} />
            </Switch>

        );
    }
}

export default CarsRoutes;
