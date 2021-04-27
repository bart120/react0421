import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from '..';

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
                            <NavLink to="/cars/list"><span>Voitures</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/cars/add">Ajouter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/auth/login">Se connecter</NavLink>
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