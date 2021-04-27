import React from 'react';
import LoginForm from '../../core/components/authentication/LoginForm';

export interface IAuthLoginProps { }

export interface IAuthLoginState { }

class AuthLogin extends React.Component<IAuthLoginProps, IAuthLoginState> {
    render() {
        return (
            <>
                <h2>Authentification</h2>
                <LoginForm onLogin={this.onLogin} />
            </>
        );
    }

    onLogin = (user: any) => {
        alert(user.username);
    }
}

export default AuthLogin;
