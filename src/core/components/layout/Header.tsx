import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { NavLink } from '..';
//import { UserModel } from '../../../models/UserModel';
import { IAuthReducer, logout } from '../../redux/reducers/AuthenticationReducer';

interface IHeaderState {
    lang: string
}

interface IHeaderProps {
    logout(payload: any): void
}


class Header extends React.Component<IHeaderProps & IAuthReducer, IHeaderState> {

    constructor(props: any) {
        super(props);
        this.state = { lang: 'FR' }
    }


    onChangeLang(lang: string, ev?: any): void {
        this.setState({ lang });
    }

    componentDidMount() {
        console.log('props ', this.props);
        /*const user = JSON.parse(sessionStorage.getItem('USER') || '{}');
        if (user.name) {
            this.setState({ user });
        }*/
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');
        //this.props.
    }

    onLogout = () => {
        this.props.logout(null);
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
                        {(this.props?.isConnected) ? (
                            <div style={{ color: '#fff' }}>
                                Bonjour {this.props?.user?.name}
                                <Button onClick={this.onLogout}>Se déconnecter</Button>
                            </div>
                        ) : (<NavItem>
                            <NavLink to="/auth/login">Se connecter</NavLink>
                        </NavItem>)}


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

const mapStateToProps = (stateStore: IAuthReducer) => {
    //console.log('stateStore', stateStore);
    //return { user: stateStore.user };
    return stateStore;
};

const mapActionstoProps = (payload: any) => {
    //return { login: () => logon(payload) };
    return { logout: bindActionCreators(logout, payload) };
}

//const withReducer = connect(mapStateToProps);

export default connect(mapStateToProps, mapActionstoProps)(Header);