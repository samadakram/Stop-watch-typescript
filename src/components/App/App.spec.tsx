import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('should render App component', () => {

    let container = shallow(<App />);

    it('should render a div',() => {
        expect(container.find('div').length).toEqual(1);
    });

    it('should render a timer component instance',() => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
    });
});