import React, { createContext, useState } from "react";
export const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, __setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    __setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN", token);
    }
  };

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
