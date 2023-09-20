"use client";
import { createContext, useState } from "react";
export const MyContext = createContext();

const ChatContext2 = ({ children }) => {
    const [sideBar, setSidebar] = useState(false);

  return (
    <MyContext.Provider value={{sideBar, setSidebar }}>
      {children}
    </MyContext.Provider>
  );
};

export default ChatContext2;
