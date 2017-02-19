import React, {Component} from 'react';
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

    let toy = <Toy/>
    expect(toy.props).toEqual({value: 'bar'});
});