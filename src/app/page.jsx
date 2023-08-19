import CreatePost from "@/components/HomePage/createPost/CreatePost";
import Posts from "@/components/HomePage/feed/Posts";
import Navbar from "@/components/HomePage/navbar/Navbar";
import Stories from "@/components/HomePage/story/Stories";

export default function Home() {
  return (

    <div>
      {/* <div className="border p-5 m-5">
        Get ready for project
      </div> */}
      <Navbar></Navbar>

      <div className="grid lg:grid-cols-3 ">
        <div className="col-span-2 px-10 mt-24">
          <Stories />
          <CreatePost></CreatePost>
          <Posts></Posts>
        </div>
      </div>
    </div>

  )
}
