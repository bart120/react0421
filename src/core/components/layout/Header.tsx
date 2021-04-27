import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

interface IHeaderState {
    lang: string
}


class Header extends React.Component<{}, IHeaderState> {

    state = { lang: 'FR' }

    onChangeLang(lang: string, ev?: any): void {
        this.setState({ lang });
    }

    componentDidMount() {
        //console.log('componentDidMount');
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }

    render() {
        //console.log('render');
        return (
            <Navbar color="dark" dark expand="md">
                <Link className="navbar-brand" to="/">RectAuto</Link>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/cars/list2">Voitures</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cars/add">Ajouter</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/auth/login">Se connecter</Link>
                        </NavItem>
                        <NavItem>
                            <ButtonGroup>
                                <Button onClick={(ev: any) => { this.onChangeLang('FR', ev); }} color={this.state.lang === 'FR' ? 'primary' : 'secondary'}>FR</Button>
                                <Button onClick={() => this.onChangeLang('EN')} color={this.state.lang === 'EN' ? 'primary' : 'secondary'}>EN</Button>
                            </ButtonGroup>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;