import React from 'react';

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        const cachedState = localStorage.getItem(this.props.type);
        if (cachedState) {
            this.state = JSON.parse(cachedState);
        }
        else {
            this.state = { value: this.props.type === "Health" ? 20 : 0 }
        }
    }

    increment(e) {
        e.preventDefault();
        let newState = {value: this.state.value + 1};
        localStorage.setItem(this.props.type, JSON.stringify(newState));
        this.setState(newState);
    }

    decrement(e) {
        e.preventDefault();
        let newState = {value: this.state.value - 1};
        localStorage.setItem(this.props.type, JSON.stringify(newState));
        this.setState(newState);
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