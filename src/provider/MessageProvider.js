"use client";

import { createContext, useState } from "react";

export const MessageContext = createContext();
const MessageProvider = ({ children }) => {
  const [drawerOn, setDrawerOn] = useState(true);


  return (
    <MessageContext.Provider value={{drawerOn, setDrawerOn }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;