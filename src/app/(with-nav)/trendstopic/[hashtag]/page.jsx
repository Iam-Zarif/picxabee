"use client"

import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import PostCardLoader from '@/components/loader/PostCardLoader';
import useFetchData from '@/hooks/useFetchData';

const HashTagTopicPage = ({ params }) => {

    const { data, isLoading } = useFetchData(`/api/trendstopic/${params.hashtag}}`)

    return (

        <div className="my-container grid lg:grid-cols-4 lg:gap-3">

            <span>
            </span>

            <div className="col-span-2">
                <h3 className='text-2xl font-semibold rounded-md mb-5'>You are looking for <span className='text-primary-color'>#{params.hashtag}</span></h3> <hr className='my-5'/>
                {
                    isLoading ? <PostCardLoader /> : data && data.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
                }
            </div>

        </div>

    );
};

export default HashTagTopicPage;