const mainReducer = (state, action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return {
        ...state,
        token: action.payload
      };

    case 'UPLOAD_IMAGE':
      return {
        ...state
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload
      };
    case 'CLICK_EMPLOYEE':
      return {
        ...state,
        employee: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;
