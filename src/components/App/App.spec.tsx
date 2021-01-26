import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('should render App component', () => {

    it('should render a div',() => {
        let container = shallow(<App />);
        expect(container.find('div').length).toEqual(1);
    });
});