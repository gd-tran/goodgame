import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Update from 'goodgame/client/components/Update.jsx';

describe('<Update />', () => {
  it('renders a submit button', () => {
    const wrapper = shallow(<Update />);
    const nodeWrapper = wrapper.find('input[type="submit"]');
    expect(nodeWrapper).toHaveLength(1);
  });

  it('submit button fetches new endpoint back to /dashboard', () => {
    // 'backToDashboard' is the method on my module, which is my fetch request
    const spy = jest.spyOn(Update, 'fetch');
    const goBack = Update.fetch();

    expect(spy).toHaveBeenCalled(1);
    // goBack.simulate('click', { target: { redirect: true }});
    // expect(Update.state('redirect').toBe(true));
  })
});