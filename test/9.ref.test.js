import React, {Component} from 'react';
import {shallow} from 'enzyme';

class Foo extends Component {
    render() {
        return <div ref={(div) => this.div = div}></div>
    }
}

test('ref child element in parent Component', () => {
    let foo = shallow(<Foo/>);

    expect(foo.div).toBe(foo.props().children);

    foo.unmount();
    expect(foo.div).toBeUndefined();
});
