import React from 'react';
import renderer from 'react-test-renderer';
import { Panel } from './Panel';

describe('components', () => {
    describe('Panel', () => {
        test('Should match snapshot', () => {
            const tree = renderer
                .create(
                    <Panel className="additional-class-name">
                        <span>Test children</span>
                    </Panel>
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
