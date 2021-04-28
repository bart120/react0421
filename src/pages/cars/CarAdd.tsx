import moment from 'moment';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import BrandModel from '../../models/BrandModel';
import { CarModel } from '../../models/CarModel';
import BrandsService from '../../services/BrandsService';
import { CarService } from '../../services/CarService';

export interface ICarAddProps { }

export interface ICarAddState {
    car: CarModel;
    brands?: Array<BrandModel>;
}

class CarAdd extends React.Component<ICarAddProps & RouteComponentProps, ICarAddState> {

    private _servBrands = new BrandsService();
    private _servCars = new CarService();

    constructor(props: ICarAddProps & RouteComponentProps) {
        super(props);
        this.state = { car: { model: '', price: 0, markID: 0, dateOfCirculation: new Date() } };
    }

    componentDidMount(): void {
        this._servBrands.getAll().then(brands => this.setState({ brands }));
    }

    onSubmit = (ev: any) => {
        ev.preventDefault();
        //console.log(this.state.car);
        this._servCars.save(this.state.car).then(car => {
            alert(`Voiture enrgistrée avec l'id ${car.id}`);
            this.props.history.push('/cars/list');
        })
    }

    onChange = (ev: any) => {
        const car = Object.assign(this.state.car || {}, { [ev.target.name]: ev.target.value });
        this.setState({ car });
    }

    onChangeDate = (ev: any) => {
        const car = Object.assign(this.state.car || {}, { [ev.target.name]: new Date(ev.target.value) });
        this.setState({ car });
    }

    render() {
        return (<div>
            <h2>Ajouer une voiture</h2>
            <Form noValidate onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="model">Modèle</Label>
                    <Input type="text" name="model" id="model" placeholder="Modèle" value={this.state?.car?.model}
                        onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Prix</Label>
                    <Input type="number" name="price" id="price" placeholder="Prix" value={this.state?.car?.price || '0'}
                        onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="Date de mise en circulation">Modèle</Label>
                    <Input type="date" name="dateOfCirculation" id="dateOfCirculation" placeholder="Date de mise en circulation"
                        value={moment(this.state?.car?.dateOfCirculation).format('yyyy-MM-DD')} onChange={this.onChangeDate} />
                </FormGroup>
                <FormGroup>
                    <Label for="markID">Marque</Label>
                    <Input type="select" name="markID" id="markID" placeholder="Marque" value={this.state?.car?.markID}
                        onChange={this.onChange}>
                        {this.state?.brands?.map(brand => {
                            return (<option key={brand.id} value={brand.id} >{brand.name}</option>);
                        })}

                    </Input>
                </FormGroup>
                <div>
                    <Button color="primary">Enregistrer</Button>
                </div>
            </Form>
        </div>);
    }
}

export default CarAdd;
