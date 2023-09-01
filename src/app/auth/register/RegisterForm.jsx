"use client";
import AuthContext from "@/context/AuthContext";
import { db, storage } from "@/firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useRouter();

  // const { createUser, updateUser, user, setLoading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data) => {
    // const { name, email, password, photo } = data;
    const { name, email, password, photoURL } = data;
    console.log(data);
    const toastId = toast.loading("Loading...");
    // setLoading(true);

    try {
      //   await createUser(email, password)    // >>>>>>>>>>>> JAHID VAI CODE
      //     .then(async () => {
      //       reset();
      //       await updateUser(name, "https://i.ibb.co/7b2bX9K/m-h-blog-img-1.jpg")
      //         .then(async () => {
      //           console.log("upload images");
      //           await fetch("http://localhost:3000/api/users", {
      //             method: "POST",
      //             body: JSON.stringify({
      //               name,
      //               email,
      //               bio: "",
      //               followers: 0,
      //               following: 0,
      //               posts: 0,
      //               profile_picture: "https://i.ibb.co/7b2bX9K/m-h-blog-img-1.jpg",
      //             }),
      //           })
      //             .then(() => console.log("User Creat on MongoDB"))
      //             .catch((err) => console.log(err));

      //           alert("Successfully Signin");
      //           setLoading(false);
      //           navigate.push("/");
      //         })
      //         .catch((err) => console.log(err));
      //     })
      //     .catch((err) => alert(err.code));
      const res = await createUser(email, password);
      const storageRef = ref(storage, name);

      const response = await fetch(photoURL);
      const blob = await response.blob();
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // You can track the upload progress here if needed
        },
        (error) => {
          console.error(error);
          toast.dismiss(toastId);
          toast.error("Error uploading photo");
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask?.snapshot.ref);
            await setDoc(doc(db, "users", res?.user.uid), {
              uid: res.user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res?.user.uid), {});
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL,
            });

            startTransition(() => {
              refresh();
              replace(from);
              toast.dismiss(toastId);
              toast.success("User signed in successfully");
            });
          } catch (error) {
            toast.dismiss(toastId);
            toast.error("Error updating user profile");
          }
        }
      );
    } catch (error) {
      //   console.log("Signup Failed", err.code);
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 ">
      {/* Name Input */}
      <input
        type="name"
        name="name"
        placeholder="Name"
        {...register("name", { required: true })}
        className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${
          errors.name ? "border-red focus:border-red focus:outline-red" : ""
        }`}
      />
      {errors.name?.type === "required" && <span className="text-red font-semibold">Name is required</span>}

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${
          errors.email ? "border-red focus:border-red focus:outline-red" : ""
        }`}
      />
      {errors.email?.type === "required" && <span className="text-red font-semibold">Email is required</span>}
      {errors.email?.type === "pattern" && (
        <span className="text-red font-semibold">Email address is not validated</span>
      )}

      {/* Password Input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        {...register("password", { required: true, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/ })}
        className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${
          errors.password ? "border-red focus:border-red focus:outline-red" : ""
        }`}
      />
      {errors.password?.type === "required" && <span className="text-red font-semibold">Password is required</span>}
      {errors.password?.type === "pattern" && (
        <span className="text-red font-semibold">Password will be 1 number, 1 Capital and 1 special character </span>
      )}
      <input
        type="url"
        name="photoURL"
        placeholder="photo url"
        {...register("photoURL")}
        className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${
          errors.url ? "border-red focus:border-red focus:outline-red" : ""
        }`}
      />
      {errors.photoURL?.type === "required" && <span className="text-red font-semibold">PhotoURL is required</span>}

      <div class="col-span-6 mt-5 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Create an account
        </button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link href="/auth/signin" class="text-gray-700 underline">
            Log in
          </Link>
          .
        </p>
      </div>
    
    </form>
  );
};

export default RegisterForm;