import React from 'react';
import Toy from './stub/Toy';

test('no children', () => {
    let toy = <Toy/>;

    expect(toy.props.children).toBeUndefined();
});

test('with children', () => {
    let toy = <Toy><label/>abc<span/></Toy>;

    expect(toy.props.children).toHaveLength(3);
});

test('with function children', () => {
    let toy = <Toy>{() => 'foo'},{() => 'bar'}</Toy>;
    let {props:{children}} = toy;

    expect(children).toHaveLength(3);
    expect(children.map((o) => typeof o)).toEqual(['function', 'string', 'function']);
    expect(children[0]()).toEqual('foo');
    expect(children[2]()).toEqual('bar');
});
