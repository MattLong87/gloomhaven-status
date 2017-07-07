import React from 'react';

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.type === "Health" ? 20 : 0 }
    }

    increment(e) {
        e.preventDefault();
        this.setState({ value: this.state.value + 1 });
    }

    decrement(e) {
        e.preventDefault();
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return <div className={'tracker ' + this.props.type.toLowerCase()}>
            <div className="up-arrow" onClick={e => this.increment(e)}></div>
            {<h3>{this.props.type}</h3>}
            <h1>{this.state.value}</h1>
            <div className="down-arrow" onClick={e => this.decrement(e)}></div>
        </div>
    }
}