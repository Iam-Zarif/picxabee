"use client"

import { HiXMark } from "react-icons/hi2";
import styles from './addstorymodal.module.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import PostCardLoader from "@/components/loader/PostCardLoader";

const AddStoryModal = ({ ...props }) => {

    const { user } = useAuth()
    const { modal, setModal, addStoryToggleModal, imgUrl, setImgUrl } = props
    const {
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const [loadPhoto, setLoadPhoto] = useState(false)
    const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);

        try {
            setLoadPhoto(true)
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_STOREIMG}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            // setAddStoryLoading(true)
            if (!res.ok) throw new Error("Failed to upload image");

            const data = await res.json();
            // setAddStoryLoading(false)
            console.log(data);
            setValue("photo", data.data.url);
            setImgUrl(data.data.url);
            setLoadPhoto(false)

        } catch (error) {
            console.log(error);
        }
    }


    const onSubmit = async data => {

        fetch('/api/stories', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                author: {
                    email: user?.email,
                    name: user?.displayName,
                    profile_pic: user?.photoURL
                },
                image: data.photo
            })
        })
            .then(() => {
                setModal(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            {modal && (
                <div className={`${styles.modal}`}>
                    <div className={`${styles.overlay}`}></div>

                    <div className="relative hidden xl:block ">
                        <div className="bg-primary-color w-[15%] h-[100vh] flex flex-col justify-between item-center py-12 px-3 text-white">

                            <h1 className="text-2xl font-semibold text-center">PicxaBee</h1>

                            <div>
                                <h1 className="text-center text-2xl font-semibold mb-5">Add Story</h1>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input onChange={uploadImage} type="file" className="mx-auto w-[90%] my-3" /> <hr />

                                    {/* <input type="submit" className="bg-primary-color py-2 text-white rounded-md w-full" /> */}
                                    <button type="submit" className={`bg-black  py-2 text-white rounded-md w-full mt-5 ${imgUrl.length == 0 ? 'bg-opacity-50' : 'bg-opacity-100'}`} disabled={imgUrl.length > 0 ? false : true}>Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div>
                        {/* Show Story which peoples want*/}
                        <div className={`${styles.modalContent} xl:w-[28%] 2xl:w-[25%] h-auto`}>

                            {/* <div className="flex flex-col justify-center items-start"> */}

                            {
                                loadPhoto ?
                                    <div className="flex justify-center items-center h-full">
                                        <div>
                                            <PostCardLoader />
                                        </div>
                                    </div> :
                                    (<Image
                                        src={imgUrl}
                                        fill={true}
                                        objectFit="cover"
                                        alt=""
                                        className="rounded-md my-auto"
                                        sizes="(min-width: 768px) 100vw"
                                    />)
                            }
                            {/* {
                                    imgUrl.length == 0 ? <span></span> : (<Image
                                        src={imgUrl}
                                        fill={true}
                                        objectFit="cover"
                                        alt=""
                                        className="rounded-md my-auto"
                                        sizes="(min-width: 768px) 100vw"
                                    />)
                                } */}

                            {/* </div> */}
                        </div>

                        <button className={`${styles.closeModal}`} onClick={addStoryToggleModal}>
                            <HiXMark className="text-4xl text-white" />
                        </button>

                        <div className={`${styles.addStoryforMobile} xl:hidden`}>
                            <div className=" flex items-center justify-between">

                                {/* <input type="file" /> */}
                                <input onChange={uploadImage} type="file" className="mx-auto w-[90%] my-3" /> <hr />
                                <button type="submit" className={`bg-white text-black rounded-md mt-5 px-2 ${styles.submitStoryforMobile} ${imgUrl.length == 0 ? 'bg-opacity-50' : 'bg-opacity-100'}`} disabled={imgUrl.length > 0 ? false : true}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default AddStoryModal;