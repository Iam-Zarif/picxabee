"use client";
import AuthContext from "@/contexts/AuthContext";
import { ChatContext } from "@/contexts/ChatContext";
import { db } from "@/firebase/Firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const ChatChats = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  

  const [chats, setChats] = useState();
  useEffect(() => {
    const getChats = () => {
       onSnapshot(doc(db, "userChats", user?.uid), (doc) => {
        setChats(doc.data());
      });
    };
    user?.uid && getChats();
  }, [user?.uid]);

  const handleSelect =(u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }

  console.log(chats);
  return (
    <div>
      {chats && (Object?.entries(chats)?.map(chat => (
          <div key={chat[0]} className='userChat text-white cursor-pointer md:text-base text-sm m-2' onClick={()=> handleSelect(chat[1].userInfo)}>
          <div className="hover:bg-gray-400 rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
              <img className="w-14 h-14 object-cover rounded-full" src={chat[1].userInfo.photoURL} alt="" />
              <div className='userChatInfo  flex-1'>
                  <p className='font-bold'>{chat[1].userInfo.displayName}</p>
                  <span className='md:text-sm text-xs'>{chat[1].userInfo.lastMessage?.text}</span>
              </div>
          </div>
      </div>
        )))}
    </div>
  );
};

export default ChatChats;
