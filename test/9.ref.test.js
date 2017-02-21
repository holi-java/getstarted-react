import React, {Component} from "react";
import {mount} from "enzyme";


test('ref child element in parent Component', () => {
    class Foo extends Component {
        render() {
            return (<div id="foo" ref={(div) => this.div = div}/>);
        }
    }

    let foo = mount(<Foo/>);

    expect(foo.wrap(foo.instance().div).prop('id')).toBe('foo');
});


test('ref with name', () => {
    class Bar extends Component {
        render() {
            return <div id="bar" ref='foo'/>
        }
    }

    let bar = mount(<Bar/>);

    expect(bar.ref('foo').prop('id')).toBe('bar');
});