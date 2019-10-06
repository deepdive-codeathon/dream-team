import React from 'react';

export default class Results extends React.Component {

    render() {
        return(
            <p>{this.props.winner}</p>
        );
    }
}