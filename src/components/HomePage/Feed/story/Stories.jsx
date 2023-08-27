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
import StoryLoading from './StoryLoading';

const Stories = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error, isLoading } = useSWR('/api/stories', fetcher)

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

            <div className='m-3 lg:m-0 grid grid-cols-4 xl:grid-cols-8 2xl:grid-cols-9'>
                <div onClick={addStoryToggleModal} className="cursor-pointer w-fit">
                    <div className='relative'>
                        <Image
                            src="https://i.ibb.co/G5MNXHQ/jahid.png"
                            width={80}
                            height={80}
                            className='w-20 h-20 rounded-full'
                            alt='story'
                        />
                        <label >
                            <HiPlusSmall className="absolute right-0 bottom-0 rounded-b-md w-full  text-white text-4xl font-bold cursor-pointer" />
                        </label>
                    </div>
                    <h5 className='text-center'>ADD</h5>
                </div>

                <div className='col-span-3 xl:col-span-7 2xl:col-span-8'>
                    { isLoading ? <StoryLoading /> :
                        (<Swiper
                            cssMode={true}
                            // breakpoints={{
                            //     640: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 60
                            //     },
                            //     1280: {
                            //         slidesPerView: 5,
                            //         spaceBetween: 30
                            //     }
                            // }}
                            slidesPerView={8}
                            spaceBetween={30}
                            navigation={true}
                            slidesPerGroupSkip={4}
                            // coverflowEffect={}
                            modules={[Navigation]}
                            className="mySwiper text-center main-slider "
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
                        </Swiper>)
                    }
                </div>
            </div>
        </>
    );
};

export default Stories;