"use client"
import React from 'react';
import AuthProvider from './AuthProvider';

const Providers = ({children}) => {
    return <AuthProvider>{children}</AuthProvider>
  
};

export default Providers;