import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Create from '../../../../client/components/dashboard/Create';

describe('<Create /> basic tests', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Create />);
    });

    it('renders a <form> with 5 text <input> and a submit button <input>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('input[type="text"]')).toHaveLength(5);
        expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
    });


})

describe('<Create /> interactive tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Create />);
    });

    it('updates component state when an input is changed', () => {
        const titleField = wrapper.find('input[name="title"]');
        const descriptionField = wrapper.find('input[name="description"]');
        const genreField = wrapper.find('input[name="genre"]');
        const platformField = wrapper.find('input[name="platform"]');
        const reviewField = wrapper.find('input[name="review"]');

        titleField.simulate('change', { target: { name: 'title', value: 'test-title' } });
        expect(wrapper.state('title')).toEqual('test-title')

        descriptionField.simulate('change', { target: { name: 'description', value: 'test-description' } });
        expect(wrapper.state('description')).toEqual('test-description')

        genreField.simulate('change', { target: { name: 'genre', value: 'test-genre' } });
        expect(wrapper.state('genre')).toEqual('test-genre')

        platformField.simulate('change', { target: { name: 'platform', value: 'test-platform' } });
        expect(wrapper.state('platform')).toEqual('test-platform')

        reviewField.simulate('change', { target: { name: 'review', value: 'test-review' } });
        expect(wrapper.state('review')).toEqual('test-review')
    });

    it('renders text within the respective inputs when it is changed (implies value is pulled from state)', () => {
        const titleField = wrapper.find('input[name="title"]');
        expect(titleField.props().value).toEqual('');
        titleField.simulate('change', { target: { name: 'title', value: 'TEST' } });
        expect(wrapper.state('title')).toEqual('TEST');
        // "Re-find" the input to see the changed value
        expect(wrapper.find('input[name="title"]').props().value).toEqual('TEST');
    });
})