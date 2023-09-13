"use client"

import styles from './viewstorymodal.module.css'
import Image from "next/image";
import { HiArrowSmallLeft, HiArrowSmallRight, HiXMark } from "react-icons/hi2";

const ViewStoryModal = ({...props}) => {

    const { data, isopen, toggleModal, index, setIndex } = props

    const showStory = data && data.filter((_, i) => i === index)

    const beforeStoryHandler = () => {
        setIndex(index - 1)
    }

    const afterStoryHandler = () => {
        setIndex(index + 1)
    }

    return (
        <>
            {isopen && showStory && showStory.map((story, idx) =>
                <div className={`${styles.modal}`} key={idx}>
                    <div className={`${styles.overlay}`}></div>
                    <div>

                        {/* Left First Story */}
                        <div className={`${styles.modalContentLeftFirst} ${((index === 1) || (index === 0)) ? 'hidden' : 'hidden 2xl:block'}`}>

                            <Image
                                src={index === 1 || index === 0 ? '' : data[index - 2].image}
                                fill={true}
                                objectFit='cover'
                                alt=""
                                className="rounded-md bg-cover"
                                sizes="(min-width: 768px) 100vw"
                            />
                        </div>

                        {/* Left Second Story */}
                        <div className={`${styles.modalContentLeftSecond} ${index === 0 ? 'hidden' : 'hidden xl:block'}`}>

                            <Image
                                src={index === 0 ? '' : data[index - 1].image}
                                fill={true}
                                objectFit='cover'
                                alt=""
                                className="rounded-md "
                                sizes="(min-width: 768px) 100vw"
                            />
                        </div>

                        {/* Main Story */}
                        <div className={`${styles.modalContent} fade-in-image w-[80%] xl:w-[28%] 2xl:w-[25%] h-auto`}>

                            <Image
                                src={story.image}
                                fill={true}
                                objectFit='cover'
                                alt=""
                                className="rounded-md my-auto"
                                sizes="(min-width: 768px) 100vw"
                            />

                            <button className={`absolute top-1/2 bottom-1/2 left-7 xl:-left-8 text-white -translate-x-1/2 -translate-y-1/2 ${index === 0 ? 'opacity-0' : 'opacity-100'}`} disabled={index === 0 ? true : false}><HiArrowSmallLeft onClick={beforeStoryHandler} className="text-4xl bg-white rounded-full text-black p-1" /></button>
                            <button className={`absolute top-1/2 bottom-1/2 -right-2 xl:-right-[68px] text-white -translate-x-1/2 -translate-y-1/2 ${(data.length - 1) === index ? 'opacity-0' : 'opacity-100'}`} disabled={(data.length - 1) === index ? true : false}><HiArrowSmallRight onClick={afterStoryHandler} className="text-4xl  bg-white rounded-full text-black p-1" /></button>
                        </div>

                        {/* Right First Story */}
                        <div className={`${styles.modalContentRightFirst} ${index === data.length - 1 ? 'hidden' : 'hidden xl:block'}`}>

                            <Image
                                src={index === data.length - 1 ? '' : data[index + 1].image}
                                fill={true}
                                objectFit='cover'
                                alt=""
                                className="rounded-md bg-cover"
                                sizes="(min-width: 768px) 100vw"
                            />
                        </div>

                        {/* Right Second Story */}
                        <div className={`${styles.modalContentRightSecond} ${((index === data.length - 1) || (index === data.length - 2)) ? 'hidden' : 'hidden 2xl:block'}`}>

                            <Image
                                src={((index === data.length - 2) || (data.length - 1) === index) ? '' : data[index + 2].image}
                                fill={true}
                                objectFit='cover'
                                alt=""
                                className="rounded-md bg-cover"
                                sizes="(min-width: 768px) 100vw"
                            />
                        </div>

                        <h1 className="text-2xl font-semibold text-white fixed top-7 left-7">PicxaBee</h1>
                        <button className={`${styles.closeModal}`} onClick={toggleModal}>
                            <HiXMark className="text-4xl" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewStoryModal;