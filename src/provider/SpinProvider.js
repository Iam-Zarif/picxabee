import LoadingSpninner from '@/utils/LoadingSpninner';
import { useSession } from 'next-auth/react';

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
