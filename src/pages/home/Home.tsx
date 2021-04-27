import React from 'react';

export interface IHomeProps { }

export interface IHomeState { }

class Home extends React.Component<IHomeProps, IHomeState> {
    render() {
        return <h1>Accueil</h1>;
    }
}

export default Home;
