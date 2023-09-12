"use client"

import useAuth from '@/hooks/useAuth';
import useFetchData from '@/hooks/useFetchData';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AdminRoute({ children }) {


    const { user } = useAuth()

    const { data: currentUser, isLoading } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`)
    const router = useRouter();

    // console.log('from admin route', user);
    // console.log('from admin route', currentUser.role);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (currentUser?.role == 'admin') {
        return children
    }

    // const isAdmin = true;

    // useEffect(() => {
    //     if (!isAdmin) {
    //         router.push('/');
    //     }
    // }, [isAdmin, router]);


    return router.push('/') // isAdmin ? children : null;
}

export default AdminRoute;
