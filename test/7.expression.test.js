import React from 'react';
import {shallow} from 'enzyme';

function render(value) {
    return shallow(<div>{value}</div>).text();
}


test('boolean will ignored', function () {
    expect(render(true)).toEqual('');
    expect(render(false)).toEqual('');
});


test('null will ignored', function () {
    expect(render(null)).toEqual('');
});


test('undefined will ignored', function () {
    expect(render(undefined)).toEqual('');
});


test('number supported', function () {
    expect(render(1)).toEqual('1');
    expect(render(NaN)).toEqual('NaN');
});


test('array supported', function () {
    expect(render([1, 2, 3])).toEqual('123');
});


test('object not supported', function () {
    expect(() => render({})).toThrow(/Objects are not valid as a React child/);
});


test('function as children', function () {
    let div = shallow(<div>{() => 'foo'}</div>);

    expect(typeof div.props().children).toEqual('function');
    expect(div.text()).toEqual('');
});