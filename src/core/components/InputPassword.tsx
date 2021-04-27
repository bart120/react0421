import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export interface IInputPasswordProps {
    validate?: boolean;
    name: string;
    placeholder?: string;
    onChange?(event: any): void
}

export interface IInputPasswordState {
    value: string;
    valid: boolean;
}

class InputPassword extends React.Component<IInputPasswordProps, IInputPasswordState> {

    state = { value: '', valid: true };
    isChange: boolean = false;

    render() {
        return (
            <FormGroup>
                <Label for="password">Mot de passe</Label>
                <Input type="password" name={this.props.name} id="password" placeholder={this.props.placeholder}
                    onChange={this.onChange} valid={this.props.validate && this.state?.valid}
                    invalid={this.props.validate && !this.state?.valid} />
            </FormGroup>
        );
    }

    componentDidUpdate(): void {
        if (this.isChange) {
            this.validate();
        }
    }

    validate(): void {
        if (this.props.validate) {
            this.setState({ valid: true });
            this.isChange = false;
            if (this.state.value !== '') {
                const regexp = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
                if (!regexp.test(this.state.value || '')) {
                    this.setState({ valid: false });
                }
            }
        }
    }

    onChange = (ev: any) => {
        this.isChange = true;
        this.setState({ value: ev.target.value });
        this.props.onChange?.call(this, ev);
    }
}

export default InputPassword;
