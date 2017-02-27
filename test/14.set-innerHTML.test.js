import React from 'react';
import {renderIntoDocument as render} from 'react-addons-test-utils';
const innerHTML = (c) => {
    return render(c).innerHTML;
}
test('dangerouslySetInnerHTML will escape all characters', () => {
    let html = {__html: '>'};
    let content = innerHTML(<span dangerouslySetInnerHTML={html}></span>);

    expect(content).toEqual('&gt;');
});

test('original set innerHTML will escape all characters', () => {
    expect(innerHTML(<span>></span>)).toEqual('&gt;');
});

test('set innerHTML by expression will escape all characters', () => {
    expect(innerHTML(<span>{'>'}</span>)).toEqual('&gt;');
});