import React, { createContext, useReducer } from "react";
import mainReducer from "./mainReducer";
import DummyImage from 'assets/img/theme/adminImage.jfif';

const initialState = {
	username: "",
	token: "",
	avatar: DummyImage
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const storeToken = payload => dispatch({ type: "STORE_TOKEN", payload });

	const uploadImage = payload => dispatch({ type: "UPLOAD_IMAGE", payload })

	const events = { storeToken, uploadImage };

	return (
		<AppContext.Provider value={{ avatar: state.avatar, events }}>
			{children}
		</AppContext.Provider>
	);
};
