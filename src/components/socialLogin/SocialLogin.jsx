"use client"

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation"
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {

    const { user, googleLogin } = useAuth()
    const router = useRouter();

    const handlerGoogleSignin = () => {
        googleLogin()
            .then(() => {
                router.push("/");

                fetch('/api/users', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: user?.displayName,
                        email: user?.email,
                        bio: '',
                        profile_picture: user?.photoURL,
                        cover_photo: '',
                        information: {
                            school: '',
                            college: '',
                            university: '',
                            location: '',
                            gender: ''
                        },
                        role: 'user',
                    }),
                });

            })
            .catch(error => {
                console.log(error.code);
            })
    }

    return (
        <div className="flex justify-center">
            {/* <button  className="bg-red bg-opacity-80 w-full text-white p-3 rounded-md">Google</button> */}
            <div className="bg-red p-3 rounded-full cursor-pointer">
                <FaGoogle onClick={handlerGoogleSignin} className="text-white rounded-md " size={30} />
            </div>
        </div>
    );
};

export default SocialLogin;
