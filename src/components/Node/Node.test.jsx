import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Node } from './Node';

afterEach(cleanup);

describe('Basic Render', () => {
    it('should render the Node component', () => {
        const { container } = render(<Node uid="foo" />);
        const selector = container.querySelector('li');

        expect(selector).not.toBeNull();
    });

    it('should render the title if `title` is provided', () => {
        const { container } = render(<Node uid="123" title="foo" />);
        const selector = container.querySelector('li > span');
        const expected = 'foo';

        expect(selector.textContent).toEqual(expected);
    });

    it('should render caret right icon if `tclass` is group and `assets` is null', () => {
        const { container } = render(<Node uid="123" tclass='group' />);
        const selector = container.querySelector('.fa-caret-right');

        expect(selector).not.toBeNull();
    });

    it('should render caret down icon if `tclass` is group and `assets` is not null', () => {
        const { container } = render(<Node uid="123" tclass='group' assets={['bar']} />);
        const selector = container.querySelector('.fa-caret-down');

        expect(selector).not.toBeNull();
    });

    it('should render folder icon if `tclass` is group and `assets` is null', () => {
        const { container } = render(<Node uid="123" tclass='group' />);
        const selector = container.querySelector('.fa-folder');

        expect(selector).not.toBeNull();
    });

    it('should render folder open icon if `tclass` is group and `assets` is not null', () => {
        const { container } = render(<Node uid="123" tclass='group' assets={['bar']} />);
        const selector = container.querySelector('.fa-folder-open');

        expect(selector).not.toBeNull();
    });

    it('should render book icon if `tclass` is book', () => {
        const { container } = render(<Node uid="123" tclass='book' />);
        const selector = container.querySelector('.fa-book');

        expect(selector).not.toBeNull();
    });

    it('should render briefcase icon if `tclass` is project', () => {
        const { container } = render(<Node uid="123" tclass='project' />);
        const selector = container.querySelector('.fa-briefcase');

        expect(selector).not.toBeNull();
    });

    it('should render powerpoint icon if `tclass` is slide', () => {
        const { container } = render(<Node uid="123" tclass='slide' />);
        const selector = container.querySelector('.fa-file-powerpoint');

        expect(selector).not.toBeNull();
    });
});
