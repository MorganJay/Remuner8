import React, { createContext, useReducer } from 'react';
import mainReducer from './mainReducer';
import DummyImage from 'assets/img/theme/adminImage.jfif';

const initialState = {
  username: '',
  token: '',
  avatar: DummyImage
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const storeToken = payload => dispatch({ type: 'STORE_TOKEN', payload });

  const uploadImage = payload => dispatch({ type: 'UPLOAD_IMAGE', payload });

  const setUsername = payload => dispatch({ type: 'SET_USERNAME', payload});

  const events = { storeToken, uploadImage, setUsername };

  return (
    <AppContext.Provider value={{ state, events }}>
      {children}
    </AppContext.Provider>
  );
};
