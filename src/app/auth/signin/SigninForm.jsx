"use client"
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SigninForm = () => {

    const { user, signIn, setLoading } = useAuth()
    console.log(user);
    const navigate = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const { email, password } = data
        setLoading(true)

        try {

            await signIn(email, password)
                .then(() => {
                    console.log('Successfully Login')
                    reset()
                    setLoading(false)
                    navigate.push('/')
                })
                .catch(err =>
                    // console.log(err.code)
                    alert(err.code)
                );

        } catch (err) {
            console.log('Signin Failed', err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 ">
            {/* Email Input */}
            <input type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                className={`block mt-3 p-3 border border-primary-color focus:outline-primary-color rounded-md w-full bg-transparent ${errors.email ? 'border-red focus:border-red focus:outline-red' : ''}`} />
            {errors.email?.type === 'required' && <span className='text-red  font-semibold'>Email is required</span>}
            {errors.email?.type === 'pattern' && <span className='text-red  font-semibold'>Email address is not validated</span>}

            {/* Password Input */}
            <input type="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className={`block mt-3 p-3 border border-primary-color focus:outline-primary-color rounded-md w-full bg-transparent ${errors.password ? 'border-red focus:border-red focus:outline-red' : ''}`} />
            {errors.password?.type === 'required' && <span className="text-red font-semibold">Password is required</span>}

            {/* Forgot Password */}
            <div className="flex justify-between items-center my-3">
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <p>Remember </p>
                </div>
                <p className="font-semibold">Forgot Password</p>
            </div>

            <input type="submit" className="bg-primary-color w-full text-white rounded-md p-3 cursor-pointer" />
        </form>
    );
};

export default SigninForm;