"use client"


import useAuth from "@/Hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            await signIn(email, password);
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} class="mt-8 grid grid-cols-6 gap-6">
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
                    {errors.email && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a valid email address.
                        </span>
                    )}
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label
                        for="Password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="Password"
                        name="password"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                      {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
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
                            I want to receive emails about events, product updates and
                            company announcements.
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
                        <a href="#" class="text-gray-700 underline">privacy policy</a>.
                    </p>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Login Your account
                    </button>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                        New To PicxaBee?
                       <Link href='/signup'> <a href="#" class="text-gray-700 underline">SignUp</a>.</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;