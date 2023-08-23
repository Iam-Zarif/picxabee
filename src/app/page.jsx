import CreatePost from "@/components/HomePage/createPost/CreatePost";
import Posts from "@/components/HomePage/feed/Posts";
// import Posts from "@/components/HomePage/feed/Posts";
import Navbar from "@/components/HomePage/navbar/Navbar";
import Stories from "@/components/HomePage/story/Stories";
import SuggestionSection from "@/components/HomePage/suggestions/Suggestions";
// import MiniProfile from "@/components/RightSideBar/MiniProfile";
// import Suggestions from "@/components/RightSideBar/Suggestions";

export default function Home() {
  return (

    <div>
      {/* <div className="border p-5 m-5">
        Get ready for project
      </div> */}
      <Navbar></Navbar>

      <div className="grid lg:grid-cols-3">
        <div className="col-span-2 px-10 mt-24">
          <Stories />
          <CreatePost></CreatePost>
<<<<<<< HEAD
          {/* <Posts></Posts> */}
=======
          {/* <Posts/> */}
>>>>>>> a6ff8b24fc8a00eb6df0287826ca5d5611423f1a
        </div>
      </div>
      <div>
        {/* <MiniProfile />
        <Suggestions /> */}
        <SuggestionSection />
      </div>
    </div>

  )
}
