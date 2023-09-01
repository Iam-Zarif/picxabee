"use client"

import { HiXMark } from "react-icons/hi2";
import styles from './addstorymodal.module.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";


const AddStoryModal = ({ ...props }) => {


    const { modal, setModal, addStoryToggleModal, imgUrl, setImgUrl } = props

    const [addStoryLoading, setAddStoryLoading] = useState(false)

    const {
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();


    const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);

        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_STOREIMG}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            setAddStoryLoading(true)
            if (!res.ok) throw new Error("Failed to upload image");

            const data = await res.json();
            setAddStoryLoading(false)
            console.log(data);
            setValue("photo", data.data.url);
            setImgUrl(data.data.url);
        } catch (error) {
            console.log(error);
        }
    }


    const onSubmit = async data => {

        fetch('picxabee.vercel.app/api/stories', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: 'jahid',
                image: data.photo
            })
        })
            .then(() => {
                console.log('complete story');
                setModal(false)
            })
            .catch(err => {
                console.log(err);
            })
        console.log(data);
    }

    return (
        <>
            {modal && (
                <div className={`${styles.modal}`}>
                    <div className={`${styles.overlay}`}></div>

                    <div className="relative">
                        <div className="bg-white w-[15%] h-[100vh] flex flex-col justify-between item-center py-12 px-3">

                            <h1 className="text-2xl font-semibold text-center">Connect-U</h1>

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
                        <div className={`${styles.modalContent} w-[80%] xl:w-[28%] 2xl:w-[25%] h-auto`}>

                            <div className="flex flex-col justify-center items-start">

                                {
                                    imgUrl.length == 0 ? <span></span> : (<Image
                                        src={imgUrl}
                                        fill={true}
                                        alt=""
                                        className="rounded-md my-auto"
                                        sizes="(min-width: 768px) 100vw"
                                    />)
                                }
                            </div>
                        </div>

                        <button className={`${styles.closeModal}`} onClick={addStoryToggleModal}>
                            <HiXMark className="text-4xl text-white" />
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default AddStoryModal;