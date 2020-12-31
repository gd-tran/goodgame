import React from 'react';
import { shallow, mount, render} from 'enzyme';
import MainContainer from '../../../../client/components/dashboard/MainContainer';

describe('<Main Container Testing! />', () => {
    let myWrapper;

    beforeAll(() => {
        myWrapper = shallow(<MainContainer />);
    });

    it('checks for elements being rendered', () => {
        expect(myWrapper.find('div')).toHaveLength(1);
        expect(myWrapper.find('Create')).toHaveLength(1);
        expect(myWrapper.find('ResultsDisplay')).toHaveLength(1);
    })

})