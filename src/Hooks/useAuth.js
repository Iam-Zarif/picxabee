"use client"


import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";


const useAuth = () => {
    const auth = useContext(AuthContext)
    const isClient = typeof window !== "undefined";

    if(!isClient && !auth) return {};

    if(!auth){
        throw new Error(
            "You must warp your application with AuthProvider or use the useAuth"
        )
    }
    return auth;
 }

 export default useAuth;