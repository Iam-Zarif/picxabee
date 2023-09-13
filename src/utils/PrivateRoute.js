'use client'
import useAuth from "@/hooks/useAuth";
import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {

    const { user } = useAuth();

    const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);

    const router = useRouter()

    if (!user) {
        return router.push('/')
    }

    if (loggedInUser?.role === 'user') {
        return router.push('/')

    }


    return children
}

export default PrivateRoute