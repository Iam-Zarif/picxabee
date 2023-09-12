"use client"

import useAuth from '@/hooks/useAuth';
import useFetchData from '@/hooks/useFetchData';
import { useRouter } from 'next/navigation';

function AdminRoute({ children }) {

    const { user } = useAuth()

    const { data: currentUser, isLoading } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`)
    const router = useRouter();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (currentUser?.role == 'admin') {
        return children
    }

    if (currentUser?.role == 'user') {
        return router.push('/')
    }
}

export default AdminRoute;
