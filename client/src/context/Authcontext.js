import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/userReducers";

export const AuthContext = createContext();


const userFromStorage = localStorage.getItem('auth')?JSON.stringify(localStorage.getItem('auth')):null

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    error: null,
    loading: false,
    user: userFromStorage,
  });
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const AuthStore = () => {
  return useContext(AuthContext);
};
