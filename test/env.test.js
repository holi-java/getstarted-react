import React from 'react';
test('async function enabled', (done) => {
    async function fn() {
        return Promise.all([1, 2, 3]);
    }

    fn().then((result) => {
        expect(result).toEqual([1, 2, 3]);
        done();
    });
});

test('react enabled', () => {
    let element = <div id="uid"/>

    expect(typeof element).toBe('object');
    expect(element.props.id).toBe('uid');
});

test('generator enabled', () => {
    function* fn() {
        yield* [1, 2];
        yield [3, 4];
    }

    expect([...fn()]).toEqual([1, 2, [3, 4]]);
});