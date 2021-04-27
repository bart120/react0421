import React from 'react';

export interface ICarListProps { }

export interface ICarListState { }

class CarList extends React.Component<ICarListProps, ICarListState> {
    render() {
        return <div>Car list component</div>;
    }
}

export default CarList;
