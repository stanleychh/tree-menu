import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Tree } from './Tree';

afterEach(cleanup);

const singleTreeData = [{
    caption: "Content - Server",
    tclass: "group",
    uid: "GR_5B103DE89EE75A1F8"
}];

const nestedTreeData = [
    {
        caption: "Content - Server",
        tclass: "group",
        uid: "GR_5B103DE89EE75A1F8",
        assets: [
            {
                caption: "1709 - On Premise",
                tclass: "group",
                uid: "GR_8A6EEEDCF01F0E9E"
            }
        ]
    }
];

describe('Basic Render', () => {
    it('should render the one layer Tree component if `treeData` is not the nested structure', () => {
        const { container } = render(<Tree treeData={singleTreeData} />);
        const selector = container.querySelector('ul');

        expect(selector).not.toBeNull();
    });

    it('should render the two layer Tree component if `treeData` is the nested structure', () => {
        const { container } = render(<Tree treeData={nestedTreeData} />);
        const selector = container.querySelectorAll('ul').length;
        const expected = 2;

        expect(selector).toEqual(expected);
    });
});
