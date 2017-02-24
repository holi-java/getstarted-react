import React, {Component} from 'react';
import {renderIntoDocument as render}from 'react-addons-test-utils';


test("unknown property in a dom element will be stripped & warning", (done) => {
    console.error = (message) => {
        try {
            expect(message).toMatch(/Unknown prop `spurious`/);
            done();
        } catch (e) {
            done.fail(e);
        }
    };

    let dom = render(<div spurious="true"/>);

    expect(dom.getAttribute('spurious')).toBeUndefined();
});


test("set unknown property in a dom element starts with `data-`  is ok", () => {
    let dom = render(<div data-spurious="true"/>);

    expect(dom.getAttribute('data-spurious')).toEqual('true');
});


test("set dynamic property starts with data- will be transformed to lowercase form", () => {
    let dom = render(<div><div data-onClick="true"/></div>);

    expect(dom.innerHTML).toEqual('<div data-onclick=\"true\"></div>');
});


test("unknown property in a Component without an upper case will be stripped but without warning", () => {
    class foo extends Component {
        render() {
            return <span/>
        }
    }

    let dom = render(<foo spurious="true"/>);

    expect(dom.getAttribute('spurious')).toBeNull();

});


