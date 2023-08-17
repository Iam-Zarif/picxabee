import Posts from "@/components/HomePage/feed/Posts";
import Navbar from "@/components/HomePage/navbar/Navbar";

export default function Home() {
  return (

    <div>
      {/* <div className="border p-5 m-5">
        Get ready for project
      </div> */}
      <Navbar></Navbar>
      <Posts></Posts>
    </div>

  )
}
