"use client"
import useAuth from '@/hooks/useAuth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { BsExclamationCircle } from 'react-icons/bs'

const FeedbackForm = () => {
  const [error, setError] = useState([]);
  const {user} = useAuth();
    const notify = (feed) =>{
        return toast(feed)
      }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    const onSubmit = async (data) => {
        const feedback = {
          author: {
            profile_picture: user?.photoURL,
            email: user?.email,
            name: user?.displayName,
          },
          feedback: data.feedback,
        };
    
        try {
          const res = await fetch("api/feedbacks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
          });
    
          if (res.ok) {
            
          } else {
            console.error("Error submitting feedback.");
    
          }
          const { msg } = await res.json();
          setError(msg);
          setTimeout(() => {
            setError(false); // Hide the message after 2 seconds
          }, 2000);
         reset();
         notify("Submitted feedback");
        } catch (error) {
          console.error("An error occurred:", error);
          
        }
       
      };
  return (
    <> <div className="flex gap-5">
    <dialog id="my_modal_1" className="modal px-8 lg:px-0 z-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="dark:bg-black-bg-primary modal-box bg-white glass w-full"
      >
        <h1 className="text-center text-xl font-bold">users Feedback</h1>
        <div className="flex flex-col gap-3 lg:mt-8 mt-4">
          <input
            {...register("name", { required: true })}
            value={`name: ` + user?.displayName}
            readOnly
            className=" input border-none shadow-sm shadow-black cursor-default"
          />

          <input
            {...register("email", { required: true })}
            value={`Email: ` +user?.email}
            readOnly
            className="input border-none shadow-sm shadow-black cursor-default"
          />

          <textarea
            {...register("feedback", { required: true })}
            placeholder="Give your feedback"
            className="textarea w-full lg:h-52 h-36 border-none  shadow-sm shadow-black"
          />
          {errors.feedback && (
            <span className="text-red flex gap-2 items-center">
              <BsExclamationCircle /> Give your feedback
            </span>
          )}
        </div >
        <input
  onClick={notify}
  type="submit"
  className="block mt-5 shadow-sm dark:bg-gray shadow-black rounded-md px-3 py-1 btn-primary dark:hover:btn-primary font-bold"
/>
       <div > 

</div>
        <div className="modal-action">
          <p>Press ESC to continue</p>
        </div>
      </form>
    </dialog>
  </div></>
  )
}

export default FeedbackForm