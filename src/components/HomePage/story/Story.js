"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

const Story = ({ story }) => {

    const { name, profilePhoto, _id } = story

    const [openStory, setOpenStory] = useState(null)
    // console.log('from story', story);

    // const handlerStory = data => {
    //     setOpenStory(data)
    // }

    return (
        <>
            <Modal
             story={story}
            />

            <label htmlFor='my-modal-3' >
                <div >
                    <Image
                        src={profilePhoto}
                        width={56}
                        height={56}
                        alt={name}
                        className="rounded-full w-14 h-14 p-0.5 border-2 border-red-500 cursor-pointer hover:scale-105 duration-300"
                    />
                    <h5 className='text-xs w-14 truncate text-center'>{name}</h5>
                </div>
            </label>
        </>
    );
};

export default Story;