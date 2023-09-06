"use client"
import Image from "next/image";
import Loading from "../loading";
import useSWR from 'swr';
import { useEffect, useState } from "react";
const FeedbackPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: feedbacks } = useSWR("/api/feedbacks", fetcher, {
    refreshInterval: 1000,
  });
  console.log(feedbacks);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const formatDate = (createdAt) => {
    const inputDate = new Date(createdAt);
    const options = { dateStyle: "long", timeStyle: "medium" };
    const formattedDateTime = inputDate.toLocaleString(undefined, options);
    return formattedDateTime;
  };

  return (
    <div className="w-10/12 mb-60 ml-auto mr-20 pt-8 mt-20 z-0">
      {isLoading ? (
        <>
<Loading />
        </>
      ) : (
        <>
          <div>
            {feedbacks?.map((feedback) => (
              <div
                key={feedback._id}
                className="collapse collapse-arrow join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="glass collapse-title text-xl font-medium">
                  <div className="flex items-center">
                    <Image
                      src={feedback?.author?.profile_picture}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                      className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
                    />
                    <div>
                      <p className="font-semibold capitalize">
                        {feedback?.author?.name}
                      </p>
                      <p className="font-light text-sm">
                        {formatDate(feedback?.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse-content">
                  <h1 className="px-5 py-3">{feedback?.feedback}</h1>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeedbackPage;
