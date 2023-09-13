'use client';

import Image from 'next/image';
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';
import SingleComment from '../HomePage/Feed/postCard/SingleComment';
import { HiTrash } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';

const RecycleSinglePost = ({ post }) => {

    const router = useRouter()

    const { _id: id } = post;
    const date1 = new Date(post?.createdAt);
    const options = { timeStyle: 'short', dateStyle: 'medium' };
    const formattedDateTime = date1.toLocaleString(undefined, options);

    const removePostHandler = async (id) => {

        const confirmed = confirm('Are you sure?');

        if (confirmed) {

            const res = await fetch(`/api/recycle?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.refresh();
            }
        }
    }

    return (
        <div data-aos="fade-up" className="lg:px-0 border-2 rounded-md mb-3">
            <div className="w-full flex items-center justify-between p-2">
                <div className="flex items-center">
                    <Image
                        src={post?.author?.profile_picture}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                        className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
                    />
                    <div>
                        <p className="font-bold capitalize">{post?.author?.name}</p>
                        <p className="font-normal text-sm ">{formattedDateTime}</p>
                    </div>
                </div>
                <button className='bg-primary-color rounded-md p-1 text-white'>
                    <HiTrash
                        onClick={() => removePostHandler(id)}
                        size={20}
                        className="hover:scale-105 duration-300 hover:cursor-pointer "
                    />
                </button>
            </div>
            {post?.content && <h1 className="px-5 py-3">{post?.content}</h1>}
            {post?.image && (
                <Image
                    src={post?.image}
                    width={600}
                    height={500}
                    alt="Posted Image"
                    className="object-contain border-none w-full h-[500px]" //object-contain
                />
            )}
            <div className="flex justify-end px-5 py-3 ">
                <div className="flex gap-3">
                    <div className='flex items-center gap-0.5'>
                        {
                            post?.reactions.length > 0 ? <>
                                <AiFillHeart
                                    onClick={() => handleRemoveReaction('tasnim@gmail.com')}
                                    size={28}
                                    className="hover:scale-105 duration-300 text-xs"
                                />
                            </> : <>
                                <AiOutlineHeart
                                    onClick={() => handleRemoveReaction('tasnim@gmail.com')}
                                    size={28}
                                    className="hover:scale-105 duration-300 text-xs"
                                />
                            </>
                        }
                        <p className="font-semibold text-lg">
                            {post?.reactions && post?.reactions.length}
                        </p>
                    </div>

                    <div className='flex items-center gap-0.5'>
                        <AiOutlineComment
                            size={28}
                            className="hover:scale-105 duration-300  text-xs"
                        />
                        <p className="font-semibold text-lg">
                            {post?.comments && post?.comments.length}
                        </p>
                    </div>


                    <div className='flex items-center gap-0.5'>
                        <PiShareFat
                            size={26}
                            className="hover:scale-105 duration-300  text-xs"
                        />
                        <p className="font-semibold text-lg">
                            {post?.reactions && post?.reactions.length}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {
                    post?.comments?.reverse().map((comment, i) => (
                        <SingleComment
                            key={i}
                            comment={comment}
                            id={post._id}
                        ></SingleComment>
                    ))}
            </div>

        </div>
    );
};

export default RecycleSinglePost;