"use client";
import AuthContext from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { db } from "@/firebase/firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from './../../../provider/MessageProvider';

const ChatChats = () => {
  const { setDrawerOn } = useContext(MessageContext);
  const { user: currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    // Function to update windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial setup on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });

    if (windowWidth <= 768) {
      // Screen width less than or equal to 768px (adjust as needed)
      setDrawerOn(false);
    } else {
      setDrawerOn(true);
    }
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
