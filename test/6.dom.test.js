import React from 'react';
import {shallow, mount} from 'enzyme';
import Toy from './stub/Toy';

test('update synchronized', function () {
    let toy = shallow(<Toy />)
    expect(toy.text()).toBe('foo');

    toy.find('span').simulate('click');

    expect(toy.text()).toBe('bar');
});


test('find element matching prop starts with `data-*` should be using the origin property name that defined in element', function () {
    let users = mount(
        <div>
            <div data-userName="jhon">Jhon</div>
            <div data-userName="mary">Mary</div>
        </div>
    );

    expect(users.find({"data-userName": "jhon"}).text()).toEqual("Jhon");
});


test('find element mismatching unknown prop was supported', function () {
    console.error = (message) => {
    };

    let users = mount(
        <div>
            <div userName="jhon">Jhon</div>
            <div userName="mary">Mary</div>
        </div>
    );

    expect(users.find({"userName": "jhon"}).text()).toEqual('Jhon');
});