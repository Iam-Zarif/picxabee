"use client";
import useSWR from "swr";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Suggestions = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loadingData, setLoading] = useState(false);

  const loadingButton = (
    <div>
      <ClipLoader color="#36d7b7" size={15} />
    </div>
  );

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR("/api/users", fetcher, {
    refreshInterval: 1000,
  });
  // console.log(data);
  const SuggestedUsers = data && data?.slice(0, 6);

  const handleFollow = async (id) => {
    console.log(id, "follow");
    const newFollowers = {
      email: user?.email,
      name: user?.displayName,
    };

    setLoading(true);

    try {
      const res = await fetch(`/api/users/${id}`, {
        cache: "no-cache",
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newFollowers }),
      });

      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUnFollow = async (id) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/users/${id}`, {
        cache: "no-cache",
        method: "DELETE",
        body: JSON.stringify({ email: user?.email }),
      });

      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-700 font-bold">See All</button>
      </div>

      {SuggestedUsers &&
        SuggestedUsers?.map((users, idx) => (
          <div key={idx} className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <Image
                height={40}
                width={40}
                className="w-10 h-10 rounded-full border p-[2px]"
                src={users?.profile_picture || ""}
                alt=""
              />
              <h2 className="font-semibold text-sm">{users?.name}</h2>
            </div>
            <div className=" ml-4 ">
              {loadingData ? (
                <>{loadingButton}</>
              ) : (
                <>
                  {" "}
                  {users?.followers?.some((f) => {
                    return f?.email === user?.email;
                  }) ? (
                    <button
                      className="text-red-400 text-sm"
                      onClick={() => handleUnFollow(users?._id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="text-red-400 text-sm"
                      onClick={() => handleFollow(users?._id)}
                    >
                      Follow
                    </button>
                  )}
                </>
              )}

              {/* <h3 className="text-xs text-gray-400">{user?.role}</h3> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Suggestions;
