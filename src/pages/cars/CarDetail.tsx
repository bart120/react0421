import React from 'react';
import { RouteComponentProps } from 'react-router';
import { CarModel } from '../../models/CarModel';
import { CarService } from '../../services/CarService';

export interface ICarDetailProps { }

export interface ICarDetailState {
    car: CarModel;
}

class CarDetail extends React.Component<ICarDetailProps & RouteComponentProps, ICarDetailState> {
    private _servCar = new CarService();

    componentDidMount(): void {
        const id = (this.props.match.params as any).id;
        this._servCar.getCarById(id).then(data => this.setState({ car: data }));
    }

    render() {
        return (
            this.state?.car ? (
                <div>
                    <h2>{this.state.car.model}</h2>
                </div>
            ) : (<></>)
        );
    }
}

export default CarDetail;
