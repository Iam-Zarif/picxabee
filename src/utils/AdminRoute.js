"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AdminRoute({ children }) {
  const router = useRouter();
  const isAdmin = false; 

  useEffect(() => {
    if (!isAdmin) {
      router.push('/'); 
    }
  }, [isAdmin, router]);
  

  return isAdmin ? children : null;
}

export default AdminRoute;
