import authenticate from './authenticate';
import { actionTypes } from '../actions/authenticate';

test('Should return state that contains isAuthenticated is true', () => {
  const initialState = {
    isAuthenticated: false,
  };
  const newState = authenticate(initialState, {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      isAuthenticated: true
    }
  });
  expect(newState.isAuthenticated).toBeTruthy();
});

test('Should return state that contains isAuthenticated is false', () => {
  const initialState = {
    isAuthenticated: true,
  };
  const newState = authenticate(initialState, {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      isAuthenticated: false
    }
  });
  expect(newState.isAuthenticated).toBeFalsy();
});