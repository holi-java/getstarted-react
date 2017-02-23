import React from 'react';
import {shallow, mount} from 'enzyme';

test("props `key` can't be read,used by React only", function (done) {
    console.error = (message) => {
        expect(message).toMatch(/`key` is not a prop./);
        done();
    };

    let {props:{id, key}}=<div id="foo" key='bar'></div>;

    expect(id).toBe('foo');
    expect(key).toBeUndefined();
});

test("list items must provide a unique key,tell the React which element should be update", function (done) {
    console.error = (message) => {
        expect(message).toMatch(/Each child in an array or iterator should have a unique "key" prop/);
        done();
    };

    let list = (
        <ul>
            {[1, 2, 3].map((v) => <li>{v}</li>)}
        </ul>
    );

});