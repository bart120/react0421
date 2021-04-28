import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import BrandModel from '../../../models/BrandModel';
import BrandsService from '../../../services/BrandsService';

interface IFooterState {
    brands: Array<BrandModel>,
}

interface IFooterProperties {//extends RouteComponentProps {
    displayTitle?: boolean;
}

class Footer extends React.Component<IFooterProperties & RouteComponentProps, IFooterState> {

    private _servBrand = new BrandsService();

    /*constructor(props: IFooterProperties & RouteComponentProps) {
        super(props);
    }*/

    state = {
        brands: []
    }
    //brands: Array<any> = [];

    componentDidMount() {
        //console.log("componentDidMount");
        //const brands = this._servBrand.getAll();
        //this.setState({ brands: brands });
        //console.log('affichage');
        this._servBrand.getAll().then(data => {
            this.setState({ brands: data });
        }).catch(err => {
            alert(err);
        });

        /*this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }
            ]
        });*/
        /*this.state.brands = [
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Renault', image: 'renault.jpg' }
        ];*/
    }

    componentDidUpdate() {
        //console.log("componentDidUpdate");
    }

    render() {
        //console.log("render " + this.state.brands);
        console.log(this.props);
        return (
            <footer>
                {this.props.displayTitle ? (<this.Title />) : (<></>)}
                <Row>
                    {this.state.brands.map((obj: any, index: number) =>
                        <Col key={index}>
                            <Card>
                                <CardImg top width="100%" src={`/images/${obj.image}`} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{obj.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
            </footer>
        );
    }

    Title = () => {
        return (
            this.props.displayTitle ?
                (<div>
                    <h3>TOP {this.state.brands.length} des marques</h3>
                </div>) :
                (<></>)
        );
    }
}

export default withRouter(Footer);
