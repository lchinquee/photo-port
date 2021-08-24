import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

// Declares component we're testing
describe('About component', () => {
    // Test one - to verify component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Test two
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})