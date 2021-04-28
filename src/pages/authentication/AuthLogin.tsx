import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../core/components/authentication/LoginForm';
import { IAuthReducer, logon } from '../../core/redux/reducers/AuthenticationReducer';
//import { UserModel } from '../../models/UserModel';

export interface IAuthLoginProps {
    login(payload: any): void
}

export interface IAuthLoginState {
    //user: UserModel;
}

class AuthLogin extends React.Component<IAuthLoginProps & IAuthReducer, IAuthLoginState> {
    render() {
        return (
            <>
                <h2>Authentification</h2>
                {this.props?.isConnected ? (
                    <div>Bonjour {this.props?.user?.name}</div>
                ) : (<LoginForm onLogin={this.onLogin} />)}
            </>
        );
    }

    componentDidMount(): void {
        /*const user = JSON.parse(sessionStorage.getItem('USER') || '{}');
        if (user.name) {
            this.setState({ user });
        }*/
    }

    onLogin = (u: any) => {

        //alert(user.username);
        const user = { name: u.username };
        this.props.login(user);
        //sessionStorage.setItem('USER', JSON.stringify(user));
        //this.setState({ user });
    }
}

const mapStateToProps = (stateStore: IAuthReducer) => {
    //console.log('stateStore', stateStore);
    //return { user: stateStore.user };
    return stateStore;
};

const mapActionstoProps = (payload: any) => {
    //return { login: () => logon(payload) };
    return { login: bindActionCreators(logon, payload) };
}

export default connect(mapStateToProps, mapActionstoProps)(AuthLogin);
