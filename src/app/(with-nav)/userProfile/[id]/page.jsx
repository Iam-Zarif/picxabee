"use client"
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const UserProfile = ({ params }) => {

    const { data } = useFetchData(`/api/userProfile/${params.id}`)
    console.log('8', data);

    // const {bio, bookmarks, email, followers, following, name, profile_picture, role, _id} = data?.singleUser

    return (
        <div className='my-container'>
            <div className='border h-[40vh]'>
                cover
            </div>

            <div className='flex justify-between'>
                <div className='flex '>
                    <div className=" mx-10 overflow-hidden -mt-16">
                        <Image
                            src={data?.singleUser?.profile_picture}
                            width={160}
                            height={160}
                            objectFit='cover'
                            alt='Profile Pic'
                            className='h-40 w-40 rounded-md'
                        />
                    </div>

                    <div className='text-left mt-3'>
                        <h3 className='text-2xl font-semibold'>{data?.singleUser?.name}</h3>
                        <h6>120+ friend</h6>
                    </div>
                </div>

                <div>
                        <div className='flex items-center gap-2 pt-3 '>
                            <BsFacebook size={24} />
                            <AiFillLinkedin size={24} />
                            <BsGithub size={24} />
                        </div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>

            <hr className='border my-10' />

            <div className='grid grid-cols-9 gap-5 mx-20'>

                <div className='col-span-4 border h-[300px] rounded-md'>
                    info
                </div>

                <div className='col-span-5 border h-[300px] rounded-md'>
                    Post
                </div>
            </div>
        </div>
    );
};

export default UserProfile;