import React, {Component} from 'react';


export default class Toy extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'foo'};
    }

    toggle = () => {
        this.setState(({text}) => {
            return {text: text == 'foo' ? 'bar' : 'foo'};
        });
    };

    render() {
        return <span onClick={this.toggle}>{this.state.text}</span>;
    };
}