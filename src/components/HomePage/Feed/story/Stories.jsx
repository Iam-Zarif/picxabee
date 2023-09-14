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
import { HiPlusSmall } from 'react-icons/hi2';
import AddStoryModal from './addStoryModal/AddStoryModal';
import ViewStoryModal from './viewStoryModal/ViewStoryModal';
import StoryLoader from '@/components/loader/StoryLoader';
import useAuth from '@/hooks/useAuth';

const Stories = () => {

    const { user } = useAuth()

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/stories', fetcher, {
        refreshInterval: 1000
    })

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

    // if (isopen) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    return (
        <>
            <ViewStoryModal isopen={isopen} toggleModal={toggleModal} index={index} data={data} setIndex={setIndex} />
            <AddStoryModal modal={modal} setModal={setModal} addStoryToggleModal={addStoryToggleModal} imgUrl={imgUrl} setImgUrl={setImgUrl} />

            {/*  */}
            {
                isLoading ?
                    <StoryLoader /> :
                    <>
                        <div className='lg:m-0 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7 gap-[5px] xl:gap-2 2xl:gap-[5px]'>
                            <div onClick={addStoryToggleModal} className="cursor-pointer w-fit">
                                <div className='relative'>
                                    <Image
                                        src={user?.photoURL}
                                        width={112}
                                        height={154}
                                        objectFit='cover'
                                        className='w-full 2xl:w-28 h-36 rounded-md'
                                        alt='story'
                                    // layout='responsive'
                                    />
                                    <label >
                                        <HiPlusSmall className="absolute right-0 bottom-0 rounded-b-md w-full bg-black text-white text-4xl font-bold cursor-pointer" />
                                    </label>
                                </div>
                            </div>


                            <div className='col-span-3 sm:col-span-4 lg:col-span-5  2xl:col-span-6'>

                                <Swiper
                                    cssMode={true}
                                    breakpoints={{
                                        340: {
                                            slidesPerView: 3,
                                            spaceBetween: 5
                                        },
                                        500: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 20
                                        },
                                        1280: {
                                            slidesPerView: 5,
                                            spaceBetween: 10
                                        },
                                        1536: {
                                            slidesPerView: 6,
                                            spaceBetween: 5
                                        }
                                    }}
                                    slidesPerView={6}
                                    spaceBetween={30}
                                    navigation={true}
                                    slidesPerGroupSkip={4}
                                    // coverflowEffect={}
                                    modules={[Navigation]}
                                    className="mySwiper main-slider "
                                >
                                    {
                                        data && data.map((story, i) => <SwiperSlide
                                            key={i}
                                            onClick={() => toggleModal(i)}
                                            className='cursor-pointer relative'
                                        >
                                            <Image
                                                src={story.image}
                                                width={112}
                                                height={154}
                                                objectFit='cover'
                                                className='w-28 h-36 rounded-md mx-auto'
                                                alt='story'
                                            />
                                            <div className='absolute top-0 w-full h-full bg-black z-20 rounded-md bg-opacity-20'>

                                            </div>
                                            <h3 className='absolute left-2 bottom-2 right-2 z-50 text-white text-xs'>{story?.author?.name}</h3>
                                        </SwiperSlide>)
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </>

            }
            {/*  */}
        </>
    );
};

export default Stories;