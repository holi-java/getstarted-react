import React from 'react';
import {shallow} from 'enzyme';
import Toy from './stub/Toy';

test('update synchronized', function () {
    let toy = shallow(<Toy />)
    expect(toy.text()).toBe('foo');

    toy.find('span').simulate('click');

    expect(toy.text()).toBe('bar');
});