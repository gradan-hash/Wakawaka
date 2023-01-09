export const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "REGISTER_SUCCESS":
      case "LOGIN_SUCCESS":
      return { ...state, loading: false,error:null,user:action.payload };
    case "REGISTER_FAIL":
      case "LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
