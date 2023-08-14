import Feed from "@/Components/Feed";
import Navbar from "@/Components/Nav";
import Stories from "@/Components/Stories";

export default function Home() {
  return(
    
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      {/* Header */}

       {/* <Nav />  */}
      <Navbar></Navbar>

      {/* Feed  */}
      <Feed />

      {/* Modal  */}

      {/* <Modal /> */}
    </div>
    
  )
}
