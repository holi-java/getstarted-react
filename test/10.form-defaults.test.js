import React from 'react';
import {shallow} from 'enzyme';


test('set default value in text input', () => {
    let input = shallow(<input type="text" defaultValue='foo'/>);

    expect(input.html()).toMatch(/value="foo"/);
});

test('set default checked in radio/checkbox', () => {
    let checkbox = shallow(<input type="checkbox" defaultChecked={true}/>);

    expect(checkbox.html()).toMatch(/checked/);
});