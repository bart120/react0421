import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { IAuthReducer } from '../redux/reducers/AuthenticationReducer';

export interface IPrivateRouteProps {
    component: any;
}

export interface IPrivateRouteState { }

class PrivateRoute extends React.Component<IPrivateRouteProps & IAuthReducer & RouteProps, IPrivateRouteState> {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={() => {
                return (this.props.isConnected ?
                    (<Component />) :
                    (<Redirect to={{ pathname: '/auth/login' }} />)
                );
            }}
            />
        );
    }
}

const mapStateToProps = (stateStore: IAuthReducer) => {
    return stateStore;
};

export default connect(mapStateToProps)(PrivateRoute);
