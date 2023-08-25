import Image from 'next/image';

const Modal = ({ story }) => {

  // console.log(_id);
  // console.log(image);
  // console.log('modal', story);

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal block ">
        <div className="modal-box    relative md:py-20 md:px-12 max-h-none h-[100vh] max-w-none w-full md:overflow-visible rounded-none m-0 bg-black text-white">
          <h1 className="absolute left-10 top-10 text-2xl">Picxabee</h1>
          <label htmlFor="my-modal-3"
            className="absolute right-10 top-10 text-2xl cursor-pointer">✕</label>
          <div className="flex h-full justify-center items-center">
            <div>

            <Image
                  // key={data.id}
                  src={story.image}
                  width={500}
                  height={500}
                  alt=""
                />
              {/* {
                singleStory && singleStory.map(data => <Image
                  key={data.id}
                  src={data.image}
                  width={500}
                  height={500}
                  alt=""
                />)
              }

              {id} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;