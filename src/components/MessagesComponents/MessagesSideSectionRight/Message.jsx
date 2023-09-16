"use client";

import AuthContext from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { useContext, useEffect, useRef } from "react";

const Message = ({ message }) => {
  const { data } = useContext(ChatContext);  // Friend User
  const { user } = useContext(AuthContext);  // Application User

  const ref = useRef();

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message])

  return (
    <div ref={ref}>
      {message.senderId === user?.uid ? (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="chat-header space-x-1">
            <span className="text-black">{user?.displayName}</span>
            {/* <time className="text-xs opacity-90">12:45</time> */}
          </div>
          <div className="flex flex-col items-end justify-center rounded-md mt-2">
            {/* {message.img && <img src={message.img} className="w-1/3 py-2 pb-3 rounded-3xl" alt="" />} */}
           {message.img && <img  className="w-1/3 py-2 pb-3 rounded-3xl" src={message.img} alt="" />}
            <p className="inline-block p-4 rounded-xl text-white font-medium md:text-sm text-xs bg-primary-color">{message.text}</p>
          </div>
          {/* <div className="chat-footer opacity-90">Delivered</div> */}
        </div>
      ) : (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={data?.user?.photoURL} />
            </div>
          </div>
          <div className="chat-header space-x-1">
            <span className="text-black">{data?.user?.displayName}</span>
            {/* <time className="text-xs ml-1 opacity-90">12:46</time> */}
          </div>
          <div className="flex flex-col items-start justify-center rounded-md mt-2">
          {/* {message.img && <img src={message.img} className="w-1/3 py-2 pb-3 rounded-3xl" alt="" />} */}
         {message.img  && <img  className="w-1/3 py-2 pb-3 rounded-3xl" src={message.img} alt="" />}
            <p className="inline-block p-4 rounded-xl ml-1 text-black font-medium md:text-sm text-xs bg-primary-color">{message.text}</p>
          </div>
          {/* <div className="chat-footer opacity-90">Seen at 12:46</div> */}
        </div>
      )}
    </div>
  );
};

export default Message;
