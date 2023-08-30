import React from 'react';
import cover from "/public/catCover.PNG";
import dp from "/public/admin.jpg";
import fb from "/public/fb.PNG";
import Image from 'next/image';
import { TbSend } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { LuEdit } from 'react-icons/lu';
import PostCards from '@/components/HomePage/Feed/postCard/PostCards';


const ProfilePage = () => {
    return (
        <>
            <div className='profile-container pl-14 pr-14'>
                <Image src={cover} alt='Profile Cover' className='cover-img w-full rounded-[14px] mb-14' />
                <div className="profile-details bg-white rounded-[4px] flex items-start justify-between">
                    <div className="pd-left">
                        <div className="pd-row flex items-start">
                            <div className="avatar mr-5">
                                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image src={dp} alt='Profile Picture' className='pd-image w-full' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-25 font-semibold text-2xl'>Hridoy Hoque</h3>
                                <p className='text-30 '>120+ Friend</p>
                                <div className='flex justify-between space-x-2 w-6 pt-3 '>
                                    <Image src={fb} alt='facebook' />
                                    <Image src={fb} alt='facebook' />
                                    <Image src={fb} alt='facebook' />
                                    <Image src={fb} alt='facebook' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd-right ">

                        <button className='btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3' type='button'>Contact <TbSend /></button>
                        <button className='btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3' type='button'>Follow <AiOutlinePlus /></button>
                        <a className='btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3' ><LuEdit /></a>

                    </div>
                </div>


                <div className='profile-info'>
                    <div className="post-col grid lg:grid-cols-12">
                        <div className='col-span-5'>


                        </div>
                        <div className='col-span-7'>
                            <PostCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;