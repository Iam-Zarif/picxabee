"use client"

import AuthContext from "@/contexts/AuthContext";
import { ChatContext } from "@/contexts/ChatContext";
import { useContext } from "react";

const Message = ({messages}) => {
  const {data} = useContext(ChatContext);
  const {user} = useContext(AuthContext);

  console.log(messages)
  return (
    <div className="">
      {/* <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://images.pexels.com/photos/4064423/pexels-photo-4064423.jpeg" />
          </div>
        </div>
        <div className="chat-header space-x-1">
          <span>Obi-Wan Kenobi</span>
          <time className="text-xs opacity-90">12:45</time>
        </div>
        <div className="flex flex-col items-start justify-center">
          <img
            src="https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg"
            className="w-1/3 py-2 pb-3 rounded-3xl"
            alt=""
          />
          <p className="chat-bubble text-white font-medium md:text-sm text-xs">You were the Chosen One!</p>
        </div>
        <div className="chat-footer opacity-90">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://images.pexels.com/photos/4057758/pexels-photo-4057758.jpeg" />
          </div>
        </div>
        <div className="chat-header space-x-1">
          <span>Anakin</span>
          <time className="text-xs ml-1 opacity-90">12:46</time>
        </div>
        <div className="flex flex-col items-end justify-center">
            <img
                src="https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg"
                className="w-1/3 py-2 pb-3 rounded-3xl"
                alt=""
              /> 
            <p className="chat-bubble mr-1 text-white  font-medium md:text-sm text-xs">I hate you!</p>
        </div>
        <div className="chat-footer opacity-90">Seen at 12:46</div>
      </div> */}
    </div>
  );
};

export default Message;
