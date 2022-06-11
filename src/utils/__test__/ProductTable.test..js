import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProductTable from '../../components/TableView/ProductTable';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';


afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ProductTable></ProductTable>, div
    );
});

it('should match snapshot', () => {
    const tree = renderer
        .create(<ProductTable />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});




