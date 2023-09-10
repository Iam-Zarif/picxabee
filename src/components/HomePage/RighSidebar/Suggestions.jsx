"use client"
import useSWR from 'swr'
import Image from "next/image";


const Suggestions = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data } = useSWR('/api/users', fetcher)
    // console.log(data)
    const filteredUsers = data && data?.filter(obj=> obj.email !== user?.email);
    const SuggestedUsers = filteredUsers && filteredUsers?.slice(0, 6);

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-700 font-bold">See All</button>
            </div>

            {SuggestedUsers && SuggestedUsers?.map((user, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between mt-3"
                >
                    <div className='flex items-center gap-2'>
                            <Image height={40} width={40} className="w-10 h-10 rounded-full border p-[2px]" src={user?.profile_picture || ''} alt="" />
                        <h2 className="font-semibold text-sm">{user?.name}</h2>
                    </div>
                    <div className=" ml-4 ">

                        {/* <h3 className="text-xs text-gray-400">{user?.role}</h3> */}
                        <button className="text-red-400 text-sm">Follow</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;