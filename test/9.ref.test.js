import React, {Component} from "react";
import {mount} from "enzyme";


test('ref by callback', () => {
    class Foo extends Component {
        render() {
            return (<div id="foo" ref={(div) => this.div = div}/>);
        }
    }

    let foo = mount(<Foo/>);

    expect(foo.wrap(foo.instance().div).prop('id')).toBe('foo');
});


test('ref by name', () => {
    let dom = mount(<RefDOMElement/>);

    expect(dom.instance().refs.content.innerHTML).toBe('foo');
});


test('ref a DOM element', () => {
    let dom = mount(<RefDOMElement/>);

    expect(dom.instance().refs.content.innerHTML).toBe('foo');
});

test('ref a Component', () => {
    let dom = mount(<RefComponent/>);

    expect(dom.instance().refs.component).toEqual(expect.any(RefDOMElement));
});


class RefDOMElement extends Component{
    render(){
        return <div><div ref="content">foo</div></div>;
    }
}

class RefComponent extends Component{
    render(){
        return <div><RefDOMElement ref="component"/></div>;
    }
}