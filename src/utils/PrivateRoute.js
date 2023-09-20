"use client"
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const router = useRouter()

    if (loading) {
        return <p>Loading...</p>
    }

    if (user?.email) {
        return children
    }

    return router.push('/auth/signin')
};

export default PrivateRoute;