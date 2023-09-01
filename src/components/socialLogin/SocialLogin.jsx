"use client"

import useAuth from "@/hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin } = useAuth()

    const handlerGoogleSignin = () => {
        googleLogin()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
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