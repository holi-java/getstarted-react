import React from 'react';

test("props `key` can't be read,used by React only", function (done) {
    console.error = (message) => {
        expect(message).toMatch(/`key` is not a prop./);
        done();
    };

    let {props:{id, key}}=<div id="foo" key='bar'></div>;

    expect(id).toBe('foo');
    expect(key).toBeUndefined();
});

test("list items must provide a unique key", function () {
    let list = (
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    );
});