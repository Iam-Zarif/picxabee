"use client"

import RecycleSinglePost from "@/components/recyclePage/RecycleSinglePost";
import useFetchData from "@/hooks/useFetchData";

const RecyclePage = () => {

    const { data: posts } = useFetchData('api/recycle')

    console.log(posts);

    return (
        <div className='my-container'>

            <h3 className='text-2xl font-semibold rounded-md mb-5'>Recycle Post</h3> <hr className='my-5' />

            <div className="grid grid-cols-3 gap-5">

                {
                    posts && posts.reverse().map(post => <RecycleSinglePost key={post._id} post={post}/>)
                }

            </div>
        </div>
    );
};

export default RecyclePage;