"use client"

import useAuth from "@/hooks/useAuth";
import {useRouter} from "next/navigation"
const SocialLogin = () => {

    const { googleLogin } = useAuth()

    const router = useRouter();
    const handlerGoogleSignin = () => {
        googleLogin()
            .then(result => {
               
                router.push("/");
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    return (
        <div className="flex gap-3">
            <button onClick={handlerGoogleSignin} className="bg-red bg-opacity-80 w-1/2 text-white p-3 rounded-md">Google</button>
            <button className="bg-blue w-1/2 text-white p-3 rounded-md">Something</button>
        </div>
    );
};

export default SocialLogin;