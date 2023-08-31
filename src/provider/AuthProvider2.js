"use client";

import { SessionProvider } from "next-auth/react";
import SpinProvider from "./SpinProvider";


const Authprovider2 = ({ children }) => {
  return (
    <SessionProvider>
      <SpinProvider>{children}</SpinProvider>
    </SessionProvider>
  );
};

export default Authprovider2;