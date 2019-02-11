import React from 'react';
import { shallow } from 'enzyme';
import PhoneItem from '.';

test('Should the appropriate template', () => {
    const component = shallow(<PhoneItem id={0} title="test" price="232.5" img="http://lorempixel.com/640/480/technics?77029"/>);
    expect(component.find('h2').text()).toEqual('test');
    expect(component.find('span').text()).toEqual('232.5€');
    expect(component.find('img').prop('src')).toEqual('http://lorempixel.com/640/480/technics?77029');
});
