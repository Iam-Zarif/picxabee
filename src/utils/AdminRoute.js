"use client"

// import useAuth from '@/hooks/useAuth';
// import useFetchData from '@/hooks/useFetchData';
// import { useRouter } from 'next/navigation';

// function AdminRoute({ children }) {

//     const { user } = useAuth()

//     const { data: currentUser, isLoading } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`)
//     const router = useRouter();

//     if (isLoading) {
//         return <h1>Loading...</h1>
//     }

//     if (!isLoading) {

//         if (currentUser?.role == 'admin') {
//             return children
//         }
//         else {
//             return router.push('/')
//         }
//     }
// }

import React, { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import useFetchData from '@/hooks/useFetchData';

function AdminRoute({ children }) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    const { data: currentUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
    useEffect(() => {
        async function fetchData() {
            try {

                if (currentUser?.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    router.push('/');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                router.push('/'); // Redirect on error
            } finally {
                setIsLoading(false);
            }
        }

        if (user) {
            fetchData();
        } else {
            setIsLoading(false);
            router.push('/'); // Redirect if user is not authenticated
        }
    }, [user, router]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isAdmin) {
        return children;
    }

    return null; // Return null instead of using router.push('/')
}

export default AdminRoute;
