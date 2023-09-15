"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";
import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from "next/link"
import photo from "../../../../public/reset_pass.png"
import Image from "next/image"
const ResetPassword = () => {

    const { resetPassword } = useAuth()

    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        resetPassword(data.email)
            .then(() => {

                reset()
                alert('Please Check Your Gmail Address for reset password')
                router.push('/auth/signin')
            })
            .catch(err => {
                alert(err.code)
                console.log(err.code);
            })
    }

    return (
        <>
        <div className='fixed top-5 left-5'>
        <Link href={"/"} className=''><BsArrowLeftCircle className=' text-primary-color hover:scale-110' size={30}/></Link>
        </div>
        <div className='flex lg:flex-row flex-col gap-8  lg:gap-28 justify-center items-center h-[100vh]'>
            <div>
                <Image src={photo} height={500} width={500} alt='image' className=' w-full'></Image>
            </div>
            <div>
                <h5 className='mb-2'>Enter your email address</h5>
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* Email Input */}
                    <div className='flex gap-'>
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                            className={`block p-3 border border-primary-color rounded-r-none focus:outline-primary-color rounded-md w-full bg-transparent ${errors.email ? 'border-red focus:border-red focus:outline-red' : ''} `} />
                        <input type="submit" className='bg-primary-color px-5 py-2 rounded-l-none hover:scale-110 hover:duration-300 text-white rounded-md cursor-pointer' />
                    </div>
                    {errors.email?.type === 'pattern' && <span className='text-red  font-semibold'>Email address is not validated</span>}
                    {errors.email?.type === 'requiredgit ' && <span className='text-red  font-semibold'>Email is required</span>}

                </form>
            </div>
        </div></>
    );
};

export default ResetPassword;
