import React from 'react';

export default class ShowImage extends React.Component {
    constructor() {
        this.state = {
            isMounted: false,

        }
    }

    componentDidMount() {
        this.setState({ isMounted: true });
    }

    render() {
        return(
            <>
                <img src={this.props.src} alt="Some Random Image"/>
            </>
        );
    }
}