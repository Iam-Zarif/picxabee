// "use client"
// import AuthContext from "@/contexts/AuthContext";
// import { ChatContext } from "@/contexts/ChatContext";
// import { db, storage } from "@/firebase/Firebase.config";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { Timestamp } from "mongodb";
// import { useContext, useState } from "react";
// import { HiOutlineInboxIn, HiOutlineLink } from "react-icons/hi";
// import { v4 as uuid } from "uuid";

 const Input = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const {data} = useContext(ChatContext);
//   const {user} = useContext(AuthContext);

//   const handleSend = async()=>{
//     if(img){

//       const storageRef = ref(storage, uuid());

//       const uploadTask = uploadBytesResumable(storageRef, img);

//       uploadTask.on(

//         (error) => {
//           // console.error(error)
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
//             await updateDoc(doc(db, "chats", data.chatId), {
//               messages: arrayUnion({
//                 id: uuid(),
//                 text,
//                 senderId:user.uid,
//                 date:Timestamp.now(),
//                 img: downloadURL
//               })
//             })
//           });
//         }
//       );
      
//     }else{
//       await updateDoc(doc(db, "chats", data.chatId), {
//         messages: arrayUnion({
//           id: uuid(),
//           text,
//           senderId:user.uid,
//           date:Timestamp.now(),
//         })
//       })
//     }
//   }

//   return (
//     <div className="sticky z-50">
//         <div className='h-[70px] bg-white p-3 text-gray-800 flex items-center justify-between  border-t-2 border-gray-400'>
//             <input type="text" placeholder="Type Message.."  className="bg-transparent border-2 border-gray-400  text-gray-800 outline-none font-medium md:text-sm text-xs p-2 flex-1 mr-5 rounded-lg placeholder-gray-500 placeholder-opacity-70" onChange={e=> setText(e.target.value)}/>
//             <div className="flex items-center gap-4 pr-3">
//                 <HiOutlineLink className="h-5 w-5 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
//                 <input type="file" style={{display: "none"}} id="file" onChange={e=> setImg(e.target.files[0])}/>
//                 <label htmlFor="file">
//                    <HiOutlineInboxIn className="h-5 w-5 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
//                 </label>
//                 <button className="font-semibold text-blue-500" onClick={handleSend}>Send</button>
//             </div>
//         </div>
//     </div>
//   )
}

 export default Input;