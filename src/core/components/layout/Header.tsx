import React from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';


class Header extends React.Component {
    render() {
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
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;