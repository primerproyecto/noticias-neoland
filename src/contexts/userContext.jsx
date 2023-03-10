import { createContext, useState } from "react";

export const UserContextProvider = createContext();

const dataFixed = {
  nombre: "Fernando",
  edad: 35,
};

export const UserProvider = ({ children }) => {
  const [data] = useState(dataFixed);
  return (
    <UserContextProvider.Provider value={{ data }}>
      {children}
    </UserContextProvider.Provider>
  );
};
