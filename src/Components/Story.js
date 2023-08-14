"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

const Story = ({ name, img, username, id }) => {

    const [openStory, setOpenStory] = useState(null)

    const handlerStory = _id => {
        setOpenStory(_id)
    }

    return (
        <>
            <Modal
                id={openStory}
            />

            <label htmlFor='my-modal-3' onClick={() => handlerStory(id)}>
                <div >
                    <Image
                        src={img}
                        width={56}
                        height={56}
                        alt={name}
                        className="rounded-full w-14 h-14 p-0.5 border-2 border-red-500 cursor-pointer hover:scale-105 duration-300"
                    />
                    <h5 className='text-xs w-14 truncate text-center'>{username}</h5>
                </div>
            </label>
        </>
    );
};

export default Story;