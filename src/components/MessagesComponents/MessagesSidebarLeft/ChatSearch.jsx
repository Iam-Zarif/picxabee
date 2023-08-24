"use client";
import AuthContext from "@/contexts/AuthContext";
import { db } from "@/firebase/Firebase.config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { useContext, useState } from "react";

const ChatSearch = () => {
  const { user: currentUser } = useContext(AuthContext);
 
  // console.log(user);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  // user.map(singleUser => {
  //   setSignleuser(singleUser);
  // })
  // console.log(singleuser)
  const HandleSearch = () => {
    try {
      onSnapshot(query(collection(db, "users"), where("displayName", "==", username)), (snapshot) => {
        const searchedUsers = snapshot.docs.map((doc) => ({
          id: doc.id, // Include the document ID
          ...doc.data(), // Include the document data // SNAPSHOT IS DIFFERENT FROM FIREBASE V9
        }));
        if (searchedUsers.length > 0) {
          setUser(searchedUsers);
        } else {
          setUser(null);
        }
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && HandleSearch();
  };

  const handleSelect = async () => {
    // 1. First check the group is exists. If not, then create one.
    const combinedId = currentUser?.uid > user[0]?.uid ? currentUser?.uid + user[0]?.uid : user[0]?.uid + currentUser?.uid;
    try {
      let res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), {
          messages: [],
        });

        await updateDoc(doc(db, "userChats", currentUser?.uid), {
          [combinedId+".userInfo"]: {
            uid: user[0]?.uid,
            displayName: user[0]?.displayName,
            photoURL: user[0]?.photoURL,
          },
          [combinedId+".data"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user[0]?.uid), {
          [combinedId+".userInfo"]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId+".data"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setUser(null)
      setUsername("")
    }
    // 2. Create user[0] chats
  };
  return (
    <div className="search">
      <div className="searchForm p-3 border-b-2 border-t-2">
        <input
          placeholder="Search Here.."
          type="text"
          className="bg-transparent border-none text-white outline-none md:text-sm text-xs p-2"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {error && <span>Its seems something wrong!</span>}
      {user && 
        user.map((singleSearchedUser) => (
          <div
            key={singleSearchedUser?.id}
            className="userChat border-gray-400 rounded-lg border-2 text-white cursor-pointer md:text-base text-sm m-2"
            onClick={handleSelect}
          >
            <div className="hover:bg-gray-400 rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
              <img className="w-14 h-14 object-cover rounded-full" src={singleSearchedUser?.photoURL} alt="" />
              <div className="userChatInfo  flex-1">
                <span className="font-bold">{singleSearchedUser?.displayName}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ChatSearch;
