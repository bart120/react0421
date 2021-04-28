import React from 'react';

export interface ICarDetailProps { }

export interface ICarDetailState { }

class CarDetail extends React.Component<ICarDetailProps, ICarDetailState> {
    render() {
        return <div>Détail</div>;
    }
}

export default CarDetail;
