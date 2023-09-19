"use client"
import cover from "/public/catCover.PNG";
import useSWR from 'swr';
// import { AiFillLinkedin } from 'react-icons/ai';
import { FaGraduationCap, FaSchool, FaReact, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
// import { SiNextdotjs } from 'react-icons/si';
// import { BsFacebook, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
// import { TbSend } from 'react-icons/tb';
// import { AiOutlinePlus } from 'react-icons/ai';
// import { LuEdit } from 'react-icons/lu';
import React, { useState } from 'react';
// import AuthContext from "@/context/AuthContext";
// import useAuth from "@/hooks/useAuth";
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from "@/components/Navbar/Navbar";
// import EditProfileModal from "@/components/OwnProfile/editProfileModal";
import { HiMiniNoSymbol, HiMiniPencilSquare } from 'react-icons/hi2';
import styles from './ownprofile.module.css'
import EditProfileModal from "@/components/OwnProfile/EditProfileModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const ProfilePage = () => {
    const [showModal, setShowModal] = useState(false)
    // const { user } = useAuth();
    const { loggedInUser } = useCurrentUser();
    console.log("login korsee", loggedInUser)
    const [formData, setFormData] = useState({
        username: '',
        bio: '',
        collegeName: '',
        schoolName: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: ownPosts,
        error,
        isLoading,
    } = useSWR(
        `/api/profile?userEmail=${loggedInUser?.email}`,
        fetcher
    );

    // const ownPosts = data && data?.filter(post => post?.author?.email === user?.email)
    console.log(ownPosts);
    return (
        <>
            <Navbar />
            <div className='my-container mt-20'>
                <div className={`${styles.imageContainer} relative `}>
                    <Image
                        src={cover}
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
                                        src={loggedInUser?.profile_picture}
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
                                <h3 className='text-2xl font-semibold'>{loggedInUser?.name}</h3>
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
                              <button onClick={() => setShowModal(true)}>  <HiMiniPencilSquare size={20} /></button>
                            </div>
                        </div>

                        <div>
                            <p><span className='font-semibold'>Email:</span> {loggedInUser?.email}</p>
                            <p><span className='font-semibold'>Followers:</span> {loggedInUser?.followers.length}</p>
                            <p><span className='font-semibold'>Following:</span> {loggedInUser?.following.length}</p>
                            {/* <p><span className='font-semibold'>Email:</span> hhridoy155@gmail.com</p>
                            <p><span className='font-semibold'>Followers:</span> 12</p>
                            <p><span className='font-semibold'>Following:</span> 13</p> */}
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
            <EditProfileModal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className='bg-white p-2 rounded'>
                    {/* Input fields for changing user data */}
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Bio</label>
                        <textarea
                            name='bio'
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-primary-color'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>College Name</label>
                        <input
                            type='text'
                            name='collegeName'
                            value={formData.collegeName}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>School Name</label>
                        <input
                            type='text'
                            name='schoolName'
                            value={formData.schoolName}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color'
                        />
                    </div>
                    <button
                        type='button'
                        className='px-4 py-2 text-white bg-primary-color rounded-md hover:bg-primary-color-dark focus:outline-none focus:ring'
                    >
                        Save Changes
                    </button>
                </div>
            </EditProfileModal>
        </>
    );
};

export default ProfilePage;