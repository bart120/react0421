import React from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';

interface IFooterState {
    brands: Array<any>,
}

interface IFooterProperties {
    displayTitle?: boolean;
}

class Footer extends React.Component<IFooterProperties, IFooterState> {

    state = {
        brands: []
    }
    //brands: Array<any> = [];

    constructor(props: IFooterProperties) {
        super(props)
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }
            ]
        });
        /*this.state.brands = [
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Renault', image: 'renault.jpg' }
        ];*/
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render " + this.state.brands);
        console.log(this.props);
        return (
            <footer>
                {this.props.displayTitle ? (<this.Title />) : (<></>)}
                <Row>
                    {this.state.brands.map((obj: any, index: number) =>
                        <Col key={index}>
                            <Card>
                                <CardImg top width="100%" src={`images/${obj.image}`} alt="Card image cap" />
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

export default Footer;
