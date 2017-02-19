import React from 'react';
import Toy from './stub/Toy';

test('state is not initialized', () => {
    let toy = <Toy foo="bar"/>;

    expect(toy.state).toBeUndefined();
});
