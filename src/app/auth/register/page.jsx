import SocialLogin from "@/components/socialLogin/SocialLogin";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {

    return (
        <>
            <div className='my-container h-[100vh] flex flex-col justify-center items-center '>
                <div className="grid grid-cols-3 w-full">
                    <div></div>
                    <div className="w-3/4">
                        <div className="text-center ">
                            <h1 className="text-4xl font-semibold">Welcome Back</h1>
                            <p className="font-semibold">Please enter your details.</p>
                        </div>

                        <RegisterForm />

                        <p className="my-5">please <Link href="/auth/signin" className="font-semibold text-primary-color">Signin</Link>. You have an account on picxabee. </p>

                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;