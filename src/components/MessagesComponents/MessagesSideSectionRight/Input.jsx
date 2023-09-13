"use client"
import AuthContext from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { db, storage } from "@/firebase/firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from 'moment';
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineInboxIn } from "react-icons/hi";
import { v4 as uuid } from "uuid";

 const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const {data} = useContext(ChatContext);
  const {user} = useContext(AuthContext);

const dateToFormat = new Date(); // Replace this with your date
const formattedDate = moment(dateToFormat).format('MMMM D, YYYY [at] h:mm A [UTC]Z');

  const handleSend = async()=>{  
    if(text.length < 1){
      return;
    }
    if(img){
    
    //   const storageRef = ref(storage);
      const storageRef = ref(storage, uuid());
      // const response = await fetch(img);
      // const blob = await response.blob();

      const uploadTask = uploadBytesResumable(storageRef, img);

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
        () => {
          getDownloadURL(uploadTask?.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, "chats", data?.chatId), {
                messages: arrayUnion({
                id: uuid(),
                text,
                senderId:user?.uid,
                date: formattedDate,
                img: downloadURL
              })
            })
          });
        }
      );
      
    }else{
      await updateDoc(doc(db, "chats", data?.chatId), {
        messages: arrayUnion({
        //   id,
          id: uuid(),
          text,
          senderId:user?.uid,
          date:formattedDate,
        })
      })
    }

    await updateDoc(doc(db, "userChats", user?.uid), {
        [data.chatId+".lastMessage"]:{
            text,
        },
        [data.chatId+".date"]: formattedDate,  
    });
    await updateDoc(doc(db, "userChats", data.user?.uid), {
        [data.chatId+".lastMessage"]:{
            text,
        },
        [data.chatId+".date"]: formattedDate,
    });

    setText("");
    setImg(null);
    
  }

  return (
    <div className="sticky z-50">
        <div className='h-[70px] bg-white p-3 text-gray-800 flex items-center justify-between  border-t-2 border-gray-400'>
            <input type="text" value={text} placeholder="Type Message.."  className="bg-transparent border-2 border-gray-400  text-black outline-none font-medium md:text-sm text-xs p-2 flex-1 mr-5 rounded-lg placeholder-gray-500 placeholder-opacity-70" onChange={e=> setText(e.target.value)}/>
            <div className="flex items-center gap-4 pr-3">
                <input type="file" style={{display: "none"}} id="file" onChange={e=> setImg(e.target.files[0])}/>
                <label htmlFor="file">
                   <HiOutlineInboxIn className="text-primary-color h-5 w-5 for-message hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                </label>
                <button className="font-semibold for-message text-primary-color" onClick={handleSend}>Send</button>
            </div>
        </div>
    </div>
  )
}

 export default Input;