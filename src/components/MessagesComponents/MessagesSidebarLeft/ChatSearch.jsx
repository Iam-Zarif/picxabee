"use client";
import AuthContext from "@/context/AuthContext";
import { db } from "@/firebase/firebase.config";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { useContext, useState } from "react";

const ChatSearch = () => {
  const { user: currentUser } = useContext(AuthContext);

  // console.log(user);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  // user.map(singleUser => {
  //   setSignleuser(singleUser);
  // })
  // console.log(singleuser)
  const handleKey = (e) => {
    e.code === "Enter" && HandleSearch();
  };

  const HandleSearch = async () => {
    try {
      // onSnapshot(query(collection(db, "users"), where("displayName", "==", username)), (snapshot) => {
      //   const searchedUsers = snapshot.docs.map((doc) => ({
      //     id: doc.id, // Include the document ID
      //     ...doc.data(), // Include the document data // SNAPSHOT IS DIFFERENT FROM FIREBASE V9
      //   }));
      const q = query(collection(db, "users"), where("displayName", "==", username));

      const querySnapshot = await getDocs(q);
      querySnapshot?.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleSelect = async () => {
    // 1. First check the group is exists. If not, then create one.
    const combinedId = currentUser?.uid > user?.uid ? currentUser?.uid + user?.uid : user?.uid + currentUser?.uid;
    console.log(combinedId);
    try {
      let res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), {
          messages: [],
        });

        await updateDoc(doc(db, "userChats", currentUser?.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user?.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
    // 2. Create user[0] chats
  };
  return (
    <div>
      <div className="search">
        <div className="searchForm p-3 border-b-2 border-t-2">
          <input
            placeholder="Search Here.."
            type="text"
            className="bg-transparent border-none outline-none md:text-sm text-xs p-2 text-black"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        {error && <span>User not found</span>}
        {user && (
          <div
            className="userChat border-gray-400 rounded-lg border-2 text-white cursor-pointer md:text-base text-sm m-2"
            onClick={handleSelect}
          >
            <div className="hover:bg-primary-color rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
              <img className="w-14 h-14 object-cover rounded-full" src={user?.photoURL} alt="" />
              <div className="userChatInfo  flex-1">
                <span className="font-bold text-black">{user?.displayName}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSearch;
