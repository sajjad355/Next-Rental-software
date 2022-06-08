import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BookingModal from '../../components/BookProduct/Booking';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';


afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BookingModal></BookingModal>, div
    );
});

// it('should match snapshot', () => {
//     const tree = renderer
//         .create(<BookingModal />)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });




