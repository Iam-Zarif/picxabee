import Image from "next/image";
import Story from "./Story";
import { HiPlusSmall } from "react-icons/hi2";
import usePosts from "@/Hooks/Posts";

const Stories = async () => {

    // const stories = await getUsers()
    // console.log('from Zstories', stories);

    return (
        <div className="flex items-center space-x-2 px-2 py-6 lg:p-6 lg:mt-8 lg:bg-white lg:border rounded-sm overflow-x-scroll scrollbar-hide lg:scrollbar lg:scrollbar-thumb-gray-900 lg:scrollbar-track-gray-100">

            <div className="relative">
                <Image
                    src="https://i.ibb.co/G5MNXHQ/jahid.png"
                    width={52}
                    height={52}
                    alt="Profile Name"
                    className="rounded-full h-[52px] w-[52px] cursor-pointer"
                />
                <h5 className='text-xs w-14 truncate text-center'>Add</h5>
                <label htmlFor='my-modal-3' >
                    <HiPlusSmall className="absolute right-0 bottom-[25%] -translate-x-1/4 bg-red-500 rounded-full border-2 border-white text-white cursor-pointer" />
                </label>
            </div>

            {/* {
                stories.map((story) => <Story
                    key={story._id}
                    image={story.image}
                    user={story.user}
                    id={story._id}
                    story={story}
                />)
            } */}
        </div>
    );
};

export default Stories;