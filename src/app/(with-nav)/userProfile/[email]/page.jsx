"use client"
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from '@/components/Navbar/Navbar';
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaGraduationCap, FaInstagramSquare, FaLinkedin, FaSchool } from 'react-icons/fa';
import { HiMiniNoSymbol, HiMiniPencilSquare } from 'react-icons/hi2';
import useSWR from 'swr'
import styles from '../userprofile.module.css'

const UserProfile = ({ params }) => {

    const email = params.email.replace('%40', '@')

    const { data } = useFetchData(`/api/userProfile/${email}`)

    console.log(data)

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: ownPosts, error, isLoading, } = useSWR(`/api/profile?userEmail=${data?.singleUser?.email}`, fetcher);

    console.log(ownPosts);

    return (
        <>
            <Navbar />

            <div className='my-container mt-20'>
                <div className={`${styles.imageContainer} relative `}>
                    <Image
                        src='https://i.ibb.co/BKfFLsv/cost-bg.jpg'
                        layout='fill'
                        objectFit='cover'
                        className={`rounded-md `}
                        alt='cover photo'
                    />

                    <div className='absolute right-5 bottom-5'>
                        <HiMiniPencilSquare size={30} className='text-white' />
                    </div>
                </div>

                <div >
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className=" mx-10 overflow-hidden -mt-16 z-40">
                                <div className={`${styles.profilePic} bg-white rounded-md`}>
                                    <Image
                                        src={data?.singleUser?.profile_picture}
                                        // width={160}
                                        // height={160}
                                        // objectFit='contain'
                                        layout='fill'
                                        objectFit='cover'
                                        alt='Profile Pic'
                                        className='h-40 w-40 rounded'
                                    />

                                    <div className='absolute bottom-1 right-1'>
                                        <HiMiniPencilSquare size={20} className='text-white' />
                                    </div>
                                </div>
                            </div>

                            <div className='text-left mt-3 w-2/4 opacity-80'>
                                <h3 className='text-2xl font-semibold'>{data?.singleUser?.name}</h3>
                                <h6 className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error!</h6>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 mx-10'>
                            {/* <fafac */}
                            <FaFacebookSquare size={30} className='text-[#0e8cf1]' />
                            <FaInstagramSquare size={30} className='text-red opacity-50' />
                            <FaLinkedin size={30} className='text-[#0a66c2] ' />
                        </div>
                    </div>
                </div>

                <hr className='border my-10 opacity-20' />

                <div className='grid grid-cols-9 gap-5 mx-20'>

                    <div className='col-span-4 bg-primary-color bg-opacity-10 h-[300px] rounded-md p-5'>
                        <div className='flex justify-between'>
                            <h5 className='text-xl uppercase font-semibold mb-5'>information</h5>

                            <div className='mt-3'>
                                <HiMiniPencilSquare size={20} />
                            </div>
                        </div>

                        <div>
                            <p><span className='font-semibold'>Email:</span> {data?.singleUser?.email}</p>
                            <p><span className='font-semibold'>Followers:</span> {data?.singleUser?.followers?.length}</p>
                            <p><span className='font-semibold'>Following:</span> {data?.singleUser?.following?.length}</p>
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
                            ownPosts?.length < 1 ?
                                <h1 className='text-3xl opacity-80 flex justify-center items-center'><HiMiniNoSymbol />  Post is not Avaiable   </h1>
                                :
                                ownPosts && ownPosts.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;