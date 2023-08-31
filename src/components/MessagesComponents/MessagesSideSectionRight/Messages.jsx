"use client"
import { ChatContext } from '@/context/ChatContext';
import { db } from '@/firebase/firebase.config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import Message from './Message';

const Messages = () => {
  const {data} = useContext(ChatContext);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
       doc.exists() && setMessages(doc.data().messages);
      });

      return ()=> {
        unsub();
      }
  
  }, [data.chatId]);
  return (
    <div className='p-3 bg-neutral-200 h-full text-gray-800 overflow-y-scroll scrollbar-thin scrollbar-thumb-black'>
       
            {messages.map(m=>(
              <Message key={m.id} message={m} />
            ))}
            
            
    </div>
  )
}

export default Messages