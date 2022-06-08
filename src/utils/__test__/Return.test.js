import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReturnModal from '../../components/ReturnProduct/Return';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';


afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ReturnModal></ReturnModal>, div
    );
});

// it('should match snapshot', () => {
//     const tree = renderer
//         .create(<ReturnModal />)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });