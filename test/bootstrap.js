import Toy from './stub/Toy';

let defaultProps, propTypes;
let consoleSnapshot;
beforeEach(() => {
    defaultProps = Object.assign({}, Toy.defaultProps);
    propTypes = Object.assign({}, Toy.propTypes);
    consoleSnapshot = Object.assign({}, console);
});

afterEach(() => {
    Object.assign(Toy, {
        defaultProps: defaultProps,
        propTypes: propTypes
    });
    Object.assign(console, consoleSnapshot);
});