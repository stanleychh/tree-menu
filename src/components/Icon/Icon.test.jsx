import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Icon } from './Icon';

afterEach(cleanup);

describe('Basic Render', () => {
    it('should render the svg Icon component', () => {
        const { container } = render(<Icon />);
        const selector = container.querySelector('svg');

        expect(selector).not.toBeNull();
    });

    it('should render the folder Icon if `type` is folder', () => {
        const { container } = render(<Icon type="folder" />);
        const selector = container.querySelector('.fa-folder');

        expect(selector).not.toBeNull();
    });

    it('should render the book Icon if `type` is book', () => {
        const { container } = render(<Icon type="book" />);
        const selector = container.querySelector('.fa-book');

        expect(selector).not.toBeNull();
    });

    it('should render the spinner Icon if `type` is spinner', () => {
        const { container } = render(<Icon type="spinner" />);
        const selector = container.querySelector('.fa-spinner');

        expect(selector).not.toBeNull();
    });
});
