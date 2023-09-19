"use client"

import Navbar from "@/components/Navbar/Navbar";
import RecycleSinglePost from "@/components/recyclePage/RecycleSinglePost";
import useAuth from "@/hooks/useAuth";
import useFetchData from "@/hooks/useFetchData";

const RecyclePage = () => {

    const {user} = useAuth()

    const { data: posts } = useFetchData(`api/recycle?email=${user?.email}`)

    return (
        <>
        <Navbar/>
        <div className='my-container'>

            <h3 className='text-2xl font-semibold rounded-md mb-5 mt-28'>Recycle Post</h3> <hr className='my-5' />

            <div className="grid grid-cols-3 gap-5">

                {
                    posts && posts.length === 0 ? <h3>You have no post for recycle</h3> :
                    posts && posts.reverse().map(post => <RecycleSinglePost key={post._id} post={post}/>)
                }

            </div>
        </div></>
    );
};

export default RecyclePage;