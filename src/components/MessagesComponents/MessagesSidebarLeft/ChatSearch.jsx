"use client";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../Firebase";
const ChatSearch = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
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
      <div className="userChat text-white cursor-pointer md:text-base text-sm m-2">
        <div className="hover:bg-gray-400 rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="userChatInfo  flex-1">
            <span className="font-bold">{user?.displayName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSearch;
