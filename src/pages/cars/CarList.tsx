import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Table } from 'reactstrap';
import { CarModel } from '../../models/CarModel';
import { CarService } from '../../services/CarService';

export interface ICarListProps { }

export interface ICarListState {
    cars: Array<CarModel>;
}

class CarList extends React.Component<ICarListProps & RouteComponentProps, ICarListState> {
    private _servCar = new CarService();

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Modèle</th>
                        <th>Prix</th>
                        <th>Mise en circulation</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state?.cars.map(car => {
                        return (<tr>
                            <td>{car.model}</td>
                            <td>{car.price} €</td>
                            <td>{car.dateOfCirculation}</td>
                            <td>
                                <Button color="info" onClick={() => this.onDetail(car.id)}>Détail</Button>
                            </td>
                        </tr>);
                    })}

                </tbody>
            </Table>
        );
    }

    componentDidMount(): void {
        this._servCar.getAll().then(data => this.setState({ cars: data }));
    }

    onDetail(id: number | undefined): void {
        //console.log(this.props);
        this.props.history.push(`/cars/detail/${id}`);
    }
}

export default CarList;
