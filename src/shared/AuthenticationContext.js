import React, { createContext, useState, useContext } from 'react';

export const Authentication = createContext();

export const useAuth = () => {
  return useContext(Authentication);
};

const AuthenticationContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined
  });

  const onLoginSuccess = (newAuthState) => {
    setAuthState({
      ...newAuthState,
      isLoggedIn: true
    });
  };

  const onLogoutSuccess = () => {
    setAuthState({
      isLoggedIn: false,
      username: undefined
    });
  };

  return (
    <Authentication.Provider
      value={{
        state: { ...authState },
        onLoginSuccess,
        onLogoutSuccess
      }}
    >
      {children}
    </Authentication.Provider>
  );
};

export default AuthenticationContextProvider;