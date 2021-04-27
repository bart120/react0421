import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import InputPassword from '../InputPassword';

export interface ILoginFormProps {
    onLogin?(user: any): void
}

export interface ILoginFormState {
    user: {
        username?: string;
        password?: string;
    },
    valid?: boolean;
}

class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
    constructor(props: ILoginFormProps) {
        super(props)
        //this.onChange = this.onChange.bind(this);
        this.state = { valid: false, user: { username: '', password: '' } };
    }

    render() {
        return (
            <Form noValidate onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="username" id="email" placeholder="Votre Email" value={this.state?.user.username}
                        onChange={this.onChange} />
                </FormGroup>
                <InputPassword validate name="password" placeholder="Votre mot de passe"
                    onChange={this.onChange} />
                <Button type="submit" color="primary">Se connecter</Button>
            </Form>
        );
    }

    onSubmit = (ev: any) => {
        ev.preventDefault();
        this.props.onLogin?.call(this, this.state.user);
        //console.log(this.state);
        //this.setState({ valid: true });
    }

    onChange = (ev: any) => {
        this.setState({ user: Object.assign(this.state.user, { [ev.target.name]: ev.target.value }) });
    }
}

export default LoginForm;
