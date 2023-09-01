import Link from "next/link";
import SigninForm from "./SigninForm";
import SocialLogin from "@/components/socialLogin/SocialLogin";

const SigninPage = () => {

    return (
        <>
            <div className='my-container h-[76vh] flex flex-col justify-center items-center '>
                <div className="grid grid-cols-3 w-full">
                    <div></div>
                    <div className="w-3/4">
                        <div className="text-center ">
                            <h1 className="text-4xl font-semibold">Welcome Back</h1>
                            <p className="font-semibold">Please enter your details.</p>
                        </div>

                        <SigninForm />

                        <p className="my-5">please <Link href="/auth/register" className="font-semibold text-primary-color">Register</Link>. If you have no account on picxabee. </p>

                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SigninPage;