"use client";

import "./CreatePost.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoIosAttach } from "react-icons/io";
import { BsImageFill, BsEmojiSmile } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const router = useRouter();
  const textareaRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (textareaRef.current && !textareaRef.current.contains(event.target)) {
      // Clicked outside the textarea, collapse it to 2 rows
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the textarea
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    // Toggle the expanded state when clicked
    setExpanded(!expanded);
  };

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
      <section className="relative bg-[#D2D2D2] p-4 bg-opacity-75 shadow-sm w-full rounded-md mx-auto mt-10">
        <div className="">
          <h1 className="text-center font-semibold text-lg py-2">Create a Post</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-5">
            <textarea
              ref={textareaRef}
              id="text"
              cols="30"
              rows={expanded ? 8 : 2}
              onClick={handleClick}
              className="w-full resize-none p-3 text-md rounded-md focus:outline-none focus:shadow-lg"
              placeholder="What's Your Mind"
            ></textarea>

<div className="flex justify-between mt-6 items-center">
              <div className="flex gap-x-2">
                <label class="custom-file-upload">
                  {/* <input type="image" /> */}
                  <BsImageFill size={28} />
                </label>
                <label class="custom-file-upload">
                  <input type="file" id="image-input" accept="image/*" {...register("image")} />
                  <IoIosAttach size={28} />
                </label>
                
              </div>
              <div className="flex items-center gap-x-4">
              <div className="flex justify-end mt-5">
              <select className="select  select-bordered rounded-md">
                  <option selected>Public</option>
                  <option>Private</option>
                </select>
            <button className="btn btn-info  font-semibold lg:ml-5 rounded-md">Create Post</button>
            <div className="form-control w-full max-w-xs flex ">
                
              </div>
          </div>
                <BsEmojiSmile size={22} className="mt-5"/>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
