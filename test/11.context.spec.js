import React, {Component} from 'react';
import {shallow, mount} from 'enzyme';

test('context to sharing data for child component', () => {
    class Button extends Component {
        render() {
            return <div>{this.context.color}</div>;
        }
    }
    //must define context types in child component
    Button.contextTypes = {color: React.PropTypes.string};
    class Foo extends Component {
        render() {
            return <Button/>;
        }

        //define method to sharing data to child component
        getChildContext() {
            return {color: 'red'};
        }
    }
    //must define child context types in parent component
    Foo.childContextTypes = {color: React.PropTypes.string};


    let foo = mount(<Foo/>);
    expect(foo.find('Button').text()).toEqual('red');
});