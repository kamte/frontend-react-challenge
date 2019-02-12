import React from 'react';
import { shallow, mount } from 'enzyme';
import PhoneDetail from '.';
import sinon from 'sinon';

test('Should the appropriate template', () => {
    const match = {params: {id: 0}}
    const onFetchPhone = () => {};
    const component = shallow(<PhoneDetail onFetchPhone={onFetchPhone} match={match} title="test" price="232.5" description="Lorem" img="http://lorempixel.com/640/480/technics?77029"/>);
    expect(component.find('h2').text()).toEqual('test');
    expect(component.find('span').text()).toEqual('Price: 232.5€');
    expect(component.find('p').text()).toEqual('Description: Lorem');
    expect(component.find('.PhoneDetail__logo').prop('src')).toEqual('http://lorempixel.com/640/480/technics?77029')
    expect(component.find('.PhoneDetail__back').prop('src')).toEqual('Back_Arrow.svg')
});

test('Should call its onFetchPhone function when mounted', () => {
    const match = {params: {id: 0}}
    const onFetchPhone = sinon.spy();
    shallow(<PhoneDetail onFetchPhone={onFetchPhone} match={match} title="test" price="232.5" description="Lorem" img="http://lorempixel.com/640/480/technics?77029"/>);
    expect(onFetchPhone.callCount).toEqual(1);
});

test('The back button should have a link to the main page', () => {
    const match = {params: {id: 0}}
    const onFetchPhone = () => {};
    const component = shallow(<PhoneDetail onFetchPhone={onFetchPhone} match={match} title="test" price="232.5" description="Lorem" img="http://lorempixel.com/640/480/technics?77029"/>);
    expect(component.find('Link').prop('to')).toEqual('/')
});