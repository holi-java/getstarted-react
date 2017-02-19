import Toy from './stub/Toy';

let props;
beforeEach(() => {
    props = Object.assign({}, Toy.defaultProps);
});

afterEach(() => {
    Toy.defaultProps = props;
});