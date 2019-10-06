import React from 'react';

export default class ShowText extends React.Component {
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
                <p id="text-box">{this.props.text}</p>
            </>
        );
    }
}