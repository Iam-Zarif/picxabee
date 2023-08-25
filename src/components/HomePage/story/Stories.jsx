"use client"
import styles from './stories.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import useSWR from 'swr'
import { useState } from 'react';
import Modal from './storyModal/StoryModal';
import { HiPlusSmall } from 'react-icons/hi2';
import AddStoryModal from './addStoryModal/AddStoryModal';

const Stories = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error, isLoading } = useSWR('http://localhost:3000/api/stories', fetcher)

    const [isopen, setIsopen] = useState(false);
    const [index, setIndex] = useState(-1);
    const [modal, setModal] = useState(false);
    const [imgUrl, setImgUrl] = useState('')


    const toggleModal = (i) => {
        setIsopen(!isopen);
        setIndex(i)
    };

    const addStoryToggleModal = () => {
        setModal(!modal);
        setImgUrl('')
    }

    return (
        <>
            <Modal isopen={isopen} toggleModal={toggleModal} index={index} data={data} setIndex={setIndex} />
            <AddStoryModal modal={modal} setModal={setModal} addStoryToggleModal={addStoryToggleModal} imgUrl={imgUrl} setImgUrl={setImgUrl} />

            <div className='flex'>
                <div onClick={addStoryToggleModal} className="w-24 h-full mr-5 cursor-pointer overflow-hidden">
                    <div className='relative'>
                        <Image
                            src="https://i.ibb.co/G5MNXHQ/jahid.png"
                            width={80}
                            height={80}
                            className='w-20 h-20 rounded-full mt-1'
                            alt='story'
                        />
                        <label >
                            <HiPlusSmall className="absolute right-0 bottom-1 rounded-b-md w-full rounded-full  text-white text-3xl font-bold cursor-pointer" />
                        </label>
                    </div>
                    <h5 className='text-center'>Add</h5>
                </div>

                <Swiper
                    cssMode={true}
                    slidesPerView={7}
                    spaceBetween={5}
                    navigation={true}
                    slidesPerGroupSkip={4}
                    modules={[Navigation]}
                    className="mySwiper text-center main-slider"
                >
                    {
                        data && data.map((story, i) => <SwiperSlide
                            key={i}
                            onClick={() => toggleModal(i)}
                            className='cursor-pointer'
                        >
                            <Image
                                src={story.image}
                                width={80}
                                height={80}
                                className='w-20 h-20 rounded-full border-2 border-black'
                                alt='story'
                            />
                            <h3>{story.username}</h3>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Stories;