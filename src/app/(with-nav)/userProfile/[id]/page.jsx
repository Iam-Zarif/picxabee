"use client"
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from '@/components/Navbar/Navbar';
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';
import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import useSWR from 'swr'

const UserProfile = ({ params }) => {

    const { data } = useFetchData(`/api/userProfile/${params.id}`)

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: ownPosts, error, isLoading, } = useSWR(`/api/profile?userEmail=${data?.singleUser?.email}`, fetcher);

    console.log(ownPosts);
    // const {bio, bookmarks, email, followers, following, name, profile_picture, role, _id} = data?.singleUser

    return (
        <>
            <Navbar />

            <div className='my-container mt-20'>
                <div className='border rounded-md h-[40vh]'>
                    <Image
                        src='https://i.ibb.co/Cv2mg8T.jpg'
                        // fill={true}
                        width={1450}
                        height={384}
                        objectFit='cover'
                        className='h-[384px]'
                        alt='cover photo'
                    />
                </div>

                <div >
                    <div className='flex '>
                        <div className=" mx-10 overflow-hidden -mt-16 bg-white">
                            <Image
                                src={data?.singleUser?.profile_picture}
                                width={160}
                                height={160}
                                objectFit='cover'
                                alt='Profile Pic'
                                className='h-40 w-40 rounded-md bg-cover'
                            />
                        </div>

                        <div className='text-left mt-3 w-1/4 opacity-80'>
                            <h3 className='text-2xl font-semibold'>{data?.singleUser?.name}</h3>
                            <h6 className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error!</h6>
                        </div>
                    </div>
                </div>

                <hr className='border my-10' />

                <div className='grid grid-cols-9 gap-5 mx-20'>

                    <div className='col-span-4 border h-[300px] rounded-md p-5'>
                        <h5 className='text-xl uppercase font-semibold mb-5'>information</h5>

                        <div>
                            <p><span className='font-semibold'>Email:</span> {data?.singleUser?.email}</p>
                            <p><span className='font-semibold'>Following:</span> 20</p>
                            <p><span className='font-semibold'>Followers:</span> 74</p>
                        </div>

                        <div className='mt-6'>
                            <p className='font-bold mb-1'>Personal Information</p>
                            <div className='flex gap-2 items-center'>
                                <FaGraduationCap size={20} />
                                <p >Studies at <span className='font-semibold opacity-80'>Govt. Bangabandhu College</span></p>
                            </div>
                            <div className='flex gap-2 item-center'>
                                <FaSchool size={20} />
                                <p>Went to <span className='font-semibold opacity-80'>Alim Uddin High School</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-5'>
                        {
                            ownPosts && ownPosts.map(post => <SinglePost key={post._id} post={post}></SinglePost>)

                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;