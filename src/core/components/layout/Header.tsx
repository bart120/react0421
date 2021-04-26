import React from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

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
                <a className="navbar-brand" href="#">RectAuto</a>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Voitures</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Ajouter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Se connecter</NavLink>
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