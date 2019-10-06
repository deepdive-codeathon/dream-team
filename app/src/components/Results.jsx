import React from 'react';

export default class Results extends React.Component {
    constructor() {
        super(props);
    }

    render() {
        return(
            <p>{this.props.results}</p>
        );
    }
}