"use client";

import { SessionProvider } from "next-auth/react";
import SpinProvider from "../SpinProvider/SpinProvider";

const Authprovider = ({ children }) => {
  return (
    <SessionProvider>
      <SpinProvider>{children}</SpinProvider>
    </SessionProvider>
  );
};

export default Authprovider;
