import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Update from 'goodgame/client/components/Update.jsx';

describe('test if update component has a submit button', () => {
  it('<Update />', () => {
    const wrapper = shallow(<Update />);
    const nodeWrapper = wrapper.find('input[type="submit"]');
    expect(nodeWrapper).toHaveLength(1);
  });
});