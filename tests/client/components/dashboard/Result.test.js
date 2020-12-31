import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Result from '../../../../client/components/dashboard/Result';

describe('<Result />', () => {
    it('renders an <h2> element and eight <p> elements', () => {
        const wrapper = shallow(<Result />);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(8);
    });

    it('renders prop values when props are passed in', () => {
        const props = {
            title: 'TITLE',
            description: 'DESCRIPTION',
            genre: 'GENRE',
            platform: 'PLATFORM',
            review: 'REVIEW',
        }

        const wrapper = shallow(<Result {...props} />);
        expect(wrapper.find('h2').text()).toContain(props.title);
    });

    it('renders an update button', () => {
      const wrapper = shallow(<Result />);
      expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });
});
