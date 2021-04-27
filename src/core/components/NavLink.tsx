import React from 'react';
import { Link } from 'react-router-dom';

export interface INavLinkProps {
    to: string;
    //children?: any
}

export interface INavLinkState { }

class NavLink extends React.Component<INavLinkProps, INavLinkState> {
    render() {
        console.log(this.props);
        return (<Link className="nav-link" to={this.props.to}>{this.props.children}</Link>);
    }
}

export default NavLink;

/*export const NavLink = (props: INavLinkProps) =>
(
    <Link className="nav-link" to={props.to}>{props.children}</Link>
);*/
