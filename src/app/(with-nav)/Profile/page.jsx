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
// import React, { useState } from 'react';
// import AuthContext from "@/context/AuthContext";
// import useAuth from "@/hooks/useAuth";
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from "@/components/Navbar/Navbar";
// import EditProfileModal from "@/components/OwnProfile/editProfileModal";
import { HiMiniNoSymbol, HiMiniPencilSquare } from 'react-icons/hi2';
import styles from './ownprofile.module.css'
import EditProfileModal from "@/components/OwnProfile/EditProfileModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useForm } from 'react-hook-form';
import useAuth from "@/hooks/useAuth";

const ProfilePage = () => {


    const { user } = useAuth();

    console.log(user)

    // fetch(`/api/users/${user?.email}`)

    // const [showModal, setShowModal] = useState(false)

    // const { register, handleSubmit } = useForm();


    // const onSubmit = (data) => {
    //     console.log(data.username)
    //     console.log(data.bio)
    //     console.log(data.college)
    //     console.log(data.school)
    // }
    return (
        <>
            <Navbar />

   
        </>
    );
};

export default ProfilePage;
