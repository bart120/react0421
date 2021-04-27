import React from 'react';

export interface INotFoundProps { }

export interface INotFoundState { }

class NotFound extends React.Component<INotFoundProps, INotFoundState> {
    render() {
        return <h1>Page introuvable</h1>;
    }
}

export default NotFound;
