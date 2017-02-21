import React from 'react';
import {render} from 'react-dom';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';


const $ = (id) => {
    return document.getElementById(id);
};

const reset = (html) => {
    document.body.innerHTML = html;
};


beforeEach(() => {
    reset('');
});

test('render to string with same props will preserve', () => {
    let toy = <span id="foo"/>;

    //server side
    let html = renderToString(toy);
    reset(`<div id="container">${html}</div>`);
    let component = $('foo');
    expect(component.tagName).toEqual('SPAN');


    //client side will preserve the component from the server
    render(toy, $('container'));
    expect($('foo') === component).toBe(true);
});


test('render diff component to string will replaced', (done) => {
    //server side
    let html = renderToString(<span id="foo"/>);
    reset(`<div id="container">${html}</div>`);
    let component = $('foo');
    expect(component.tagName).toEqual('SPAN');


    console.error = (message) => {
        expect(message).toMatch(/React attempted to reuse markup in a container but the checksum was invalid./);
        done();
    };
    //client side will preserve the component from the server
    render(<span id="bar"/>, $('container'));
    expect($('foo') !== component).toBe(true);
});


test('render to static markup will replaced', () => {
    let foo = <span id="foo"/>;

    //server side
    let html = renderToStaticMarkup(foo);
    reset(`<div id="container">${html}</div>`);
    let component = $('foo');
    expect(component.tagName).toEqual('SPAN');


    //client side will preserve the component from the server
    render(foo, $('container'));
    expect($('foo')).not.toBeUndefined();
    expect($('foo') !== component).toBe(true);
});


test('render diff component to static markup will replaced', () => {
    //server side
    let html = renderToStaticMarkup(<span id="foo"/>);
    reset(`<div id="container">${html}</div>`);
    let component = $('foo');
    expect(component.tagName).toEqual('SPAN');


    //client side will preserve the component from the server
    render(<span id="bar"/>, $('container'));
    expect($('bar')).not.toBeUndefined();
    expect($('bar') !== component).toBe(true);
});
