import React from 'react';
import { shallow } from 'enzyme';
import { API } from 'aws-amplify';
import Home from './';

jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ReactComponent,
    Provider: ({ children }) => children
  }
});
describe('Render GUI correctly', () => {
  const keepAlert = window.alert;
  
  test('renders landing page when unauthorize', () => {
    const wrapper = shallow(<Home isAuthenticated={false}/>);
    const lander = wrapper.find('.lander');
    expect(lander.length).toEqual(1);
  });
  
  test('renders notes when it has been authorized', () => {
    const wrapper = shallow(<Home isAuthenticated={true}/>);
    const notes = wrapper.find('.notes');
    const lander = wrapper.find('.lander');
    window.alert = jest.fn(() => {});
    expect(notes.length).toEqual(1);
    expect(lander.length).toEqual(0);
  });

  test('Should call to get Notes when it has been authorized and component did mount', () => {
    const getNote = spyOn(API, 'get');
    const wrapper = shallow(<Home isAuthenticated={true}/>);
    window.alert = jest.fn(() => {});
    expect(getNote).toBeCalled();
  });
  
});

