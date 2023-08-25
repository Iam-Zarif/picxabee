"use client"

import { useSession } from 'next-auth/react';
import LoadingSpninner from '../LoadingSpninner/LoadingSpninner';

const SpinProvider = ({children}) => {

   const session = useSession();
  
   if(session.status === 'loading') {
   return (<LoadingSpninner>
    {children}
   </LoadingSpninner>)
   } else{
    return children;
   }
   
}

export default SpinProvider;

