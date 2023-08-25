"use client";

import useAuth from "@/Hooks/useAuth";
import { db, storage } from "@/firebase/Firebase.config";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { useRouter, useSearchParams } from "next/navigation";

import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { createUser, profileUpdate } = useAuth();

  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data, event) => {
    const { name, email, password, photoURL } = data;
    const toastId = toast.loading("Loading...");
    try {
      const res = await createUser(email, password);
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, photoURL);

      uploadTask.on(

        (error) => {
          console.error(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL, 
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: name,
              email,
              photoURL:downloadURL,
            })
            await setDoc(doc(db, 'userChats', res.user.uid), {});
          });
        }
      );
     
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} class="mt-8 grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label for="FirstName" class="block text-sm font-medium text-gray-700">
          Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="name"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500 text-base mt-1">Please enter your name.</span>}
      </div>

      <div class="col-span-6">
        <label for="Email" class="block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && <span className="text-red-500 text-base mt-1">Please enter a valid email address.</span>}
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="Password" class="block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <span className="text-red-500 text-base mt-1">Please enter a password.</span>}
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="PhotoURL" class="block text-sm font-medium text-gray-700">
          Photo Url
        </label>

        <input
          type="url"
          id="photoURL"
          name="photoURL"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("photoURL", { required: true })}
        />
        {errors.photoURL && <span className="text-red-500 text-base mt-1">Please enter photo url</span>}
      </div>
      <div class="col-span-6">
        <label for="MarketingAccept" class="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span class="text-sm text-gray-700">
            I want to receive emails about events, product updates and company announcements.
          </span>
        </label>
      </div>

      <div class="col-span-6">
        <p class="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" class="text-gray-700 underline">
            terms and conditions
          </a>
          and
          <a href="#" class="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Create an account
        </button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <a href="#" class="text-gray-700 underline">
            Log in
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
