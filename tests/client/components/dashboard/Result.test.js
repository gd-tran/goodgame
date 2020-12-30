import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Result from '../../../../client/components/dashboard/Result';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Result />', () => {
    it('renders an <h2> element', () => {
        const wrapper = shallow(<Result />);
        expect(wrapper.find('h2')).toHaveLength(1);
    })
})