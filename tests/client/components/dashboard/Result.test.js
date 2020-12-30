import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Result from '../../../../client/components/dashboard/Result';

describe('<Result />', () => {
    it('renders an <h2> element', () => {
        const wrapper = shallow(<Result />);
        expect(wrapper.find('h2')).toHaveLength(1);
    })
})