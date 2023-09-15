"use client";
import AuthContext from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { db } from "@/firebase/firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const ChatChats = () => {

  const { user: currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser?.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);


  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {chats && (Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date)?.map(chat => (
        <div key={chat[0]} className='userChat text-white cursor-pointer md:text-base text-sm m-2' onClick={() => handleSelect(chat[1]?.userInfo)}>
          <div className="hover:bg-primary-color rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
            <img className="w-14 h-14 object-cover rounded-full" src={chat[1].userInfo.photoURL} alt="" />
            <div className='userChatInfo  flex-1'>
              <p className='font-bold text-black'>{chat[1].userInfo.displayName}</p>
              <span className='md:text-sm text-xs text-black'>{chat[1].lastMessage?.text}</span>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
};

export default ChatChats;
