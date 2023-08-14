import loadStoriesData from '@/utlis/loadStoriesData';
import Image from 'next/image';
import React, { useState } from 'react';

const Modal = ({ id, img }) => {

  const [test, settest] = useState([])

  const stories = loadStoriesData()
  const singleStory = stories.filter(story => story.id == id)

  console.log(id);
  console.log(stories);
  console.log(singleStory);
  console.log(test);

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal block ">
        <div className="modal-box    relative md:py-20 md:px-12 max-h-none h-[100vh] max-w-none w-full md:overflow-visible rounded-none m-0 bg-black text-white">
          <h1 className="absolute left-10 top-10 text-2xl">Picxabee</h1>
          <label for="my-modal-3"
            className="absolute right-10 top-10 text-2xl cursor-pointer">✕</label>
          <div className="flex h-full justify-center items-center">
            <div>
              {
                singleStory && singleStory.map(data => <Image
                  key={data.id}
                  src={data.image}
                  width={500}
                  height={500}
                  alt=""
                />)
              }

              {id}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;