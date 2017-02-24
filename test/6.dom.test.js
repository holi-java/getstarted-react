import React from 'react';
import {shallow} from 'enzyme';
import Toy from './stub/Toy';

test('update synchronized', function () {
    let toy = shallow(<Toy />)
    expect(toy.text()).toBe('foo');

    toy.find('span').simulate('click');

    expect(toy.text()).toBe('bar');
});

test('find element matching prop starts with `data-*` should be using the origin property name that defined in element', function () {
    let users = shallow(
        <div>
            <div data-userName="jhon">Jhon</div>
            <div data-userName="mary">Mary</div>
        </div>
    );

    expect(users.find({"data-userName": "jhon"}).text()).toEqual("Jhon");
});