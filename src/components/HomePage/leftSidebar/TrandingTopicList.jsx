'use client'

import Link from 'next/link';
import HashtagLoader from '@/components/loader/HashtagLoader';
import useSWR from "swr";

const TrandingTopicList = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, isLoading } = useSWR(`/api/trendstopic`, fetcher, {
        refreshInterval: 1000
    });

    return (
        <div className='rounded-md'>
            <h3 className='font-semibold text-2xl'>Trending Topics</h3>

            <div className='flex flex-wrap gap-3 my-3'>

                {
                    isLoading ? <HashtagLoader /> : data && data.map((hastag, idx) => <h5
                        key={idx}
                        className='bg-primary-color rounded-md px-2 bg-opacity-10 cursor-pointer text-sm'
                    >
                        <Link href={`/trendstopic/${hastag?.hashtag?.slice(1)}`}>{hastag?.hashtag}</Link>
                    </h5>)
                }
            </div>
        </div>
    );
};

export default TrandingTopicList;