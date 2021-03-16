import React, { userReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = () => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert

  // Remove Alert

  return (
    <AlertContext.Provider value={{}}>{props.children}</AlertContext.Provider>
  );
};

export default AlertState;
