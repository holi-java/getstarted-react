import React from 'react';
import render from 'react-test-renderer';
import Toy from './stub/Toy';


test('rendering', () => {
    let element = render.create(<Toy onClick={() => {
    }}/>);

    let json = element.toJSON();

    expect(json).toMatchSnapshot();
});