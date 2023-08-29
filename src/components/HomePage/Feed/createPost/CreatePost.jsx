"use client";

import Image from "next/image";
import "./CreatePost.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoIosAttach } from "react-icons/io";
import { BsImageFill, BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {

  const router = useRouter();

  // console.log(image);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(data.text);
    // console.log(data.image.length);
    const { text } = data;

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=f3218173624c8aebe56d3c415677e482`;

    if (data.image.length == 0) {
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            author: {
              email: "jahid@gmail.com",
              name: "Jahid Howlader",
              profile_picture: "https://i.ibb.co/dK0NCr6/Jahid-Howlader.jpg",
            },
            content: text || "",
            image: "",
            comments: [
              {
                author: {
                  name: "",
                  profile_picture: "",
                },
              },
            ],
          }),
        });
        if (res.ok) {
          alert("Post Create Successful");
          router.refresh();
        } else {
          throw new Error("Failed to create post");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (data.image.length == 1) {
      axios.post(url, formData).then(async (imageData) => {
        // setImage(imageData.data.data.url);
        if (imageData.status === 200) {
          try {
            const res = await fetch("http://localhost:3000/api/posts", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                author: {
                  email: "jahid@gmail.com",
                  name: "Jahid Howlader",
                  profile_picture: "https://i.ibb.co/dK0NCr6/Jahid-Howlader.jpg",
                },
                content: text || "",
                image: imageData.data.data.url,
                comments: [
                  {
                    author: {
                      name: "",
                      profile_picture: "",
                    },
                  },
                ],
              }),
            });
            if (res.ok) {
              alert("Success");
              router.refresh();
            } else {
              throw new Error("Failed to fetch");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  };

  return (
    <>
      <section className="relative bg-[#D2D2D2] p-4 bg-opacity-75 shadow-sm w-[90%] mx-auto mt-10">
        <div className="">
          <h1 className="text-center font-semibold text-lg py-2">Create a Post</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-5">
            <textarea
              name="text"
              {...register("text")}
              id=""
              cols="30"
              rows="8"
              className="w-full resize-none p-3 text-md rounded-md focus:outline-none focus:shadow-lg"
              placeholder="What's Your Mind"
            ></textarea>
            
            <div className="flex justify-between px-10 py-5">
              <div className="flex gap-x-2">
                <label class="custom-file-upload">
                  {/* <input type="image" /> */}
                  <BsImageFill size={22} />
                </label>
                <label class="custom-file-upload">
                  <input type="file" id="image-input" accept="image/*" {...register("image")} />
                  <IoIosAttach size={22} />
                </label>
              </div>
              <div>
                <BsEmojiSmile size={22} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div></div>
            <div>
              <div className="form-control w-full max-w-xs flex ">
                <select className="select select-bordered rounded-none">
                  <option selected>Public</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button className="btn btn-info rounded-none font-semibold">Create Post</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
