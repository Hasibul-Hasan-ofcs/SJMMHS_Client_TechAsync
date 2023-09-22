import React, { createContext, useState } from "react";

export const HomeContext = createContext(null);

const HomeContextProvider = ({ children }) => {
  const [sideBarActive, setSideBarActive] = useState(false);

  const data = {
    sideBarActive,
    setSideBarActive,
  };

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
