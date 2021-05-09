import React, { createContext, useReducer } from 'react';
import mainReducer from './mainReducer';
import DummyImage from 'assets/img/theme/adminImage.jfif';

const initialState = {
  username: '',
  token: '',
  avatar: DummyImage,
  employee: null
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const storeToken = payload => dispatch({ type: 'STORE_TOKEN', payload });

  const uploadImage = payload => dispatch({ type: 'UPLOAD_IMAGE', payload });

  const setUsername = payload => dispatch({ type: 'SET_USERNAME', payload });

  const clickEmployee = payload =>
    dispatch({ type: 'CLICK_EMPLOYEE', payload });

  const events = { storeToken, uploadImage, setUsername, clickEmployee };

  return (
    <AppContext.Provider value={{ state, events }}>
      {children}
    </AppContext.Provider>
  );
};
