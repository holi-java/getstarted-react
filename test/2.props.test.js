import React, {Component} from 'react';
import {renderIntoDocument as render}from 'react-addons-test-utils';
import Toy from './stub/Toy';
test('without props', () => {
    let toy = <Toy/>;

    expect(toy.props).toEqual({});
});


test('custom props', () => {
    let toy = <Toy foo="bar"/>;

    expect(toy.props.foo).toBe('bar');
});


test('default property', function () {
    Toy.defaultProps = {
        value: 'bar'
    };
    let toy = <Toy/>;
    expect(toy.props).toEqual({value: 'bar'});
});


test('validator', function (done) {
    Toy.propTypes = {name: React.PropTypes.string};

    //validator errors only warning in console
    console.error = (message) => {
        expect(message).toMatch(/`name`/);
        done();
    };

    <Toy name={true}/>;
});

test('spread props into Component', () => {
    const props = {foo: 'bar', fuzz: 'buzz'};

    let toy = <Toy {...props}/>

    expect(toy.props).toEqual(props);
});


test("can't set object props into DOM Element", () => {
    const value = {foo: 'bar', fuzz: 'buzz'};

    let div = render(<div><span value={value}/></div>);

    expect(div.innerHTML).toEqual('<span value="[object Object]"></span>');
});
