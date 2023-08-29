import Feed from "@/components/HomePage/Feed/Feed";
import MiniProfile from "@/components/HomePage/RighSidebar/MiniProfile";
import Suggestions from "@/components/HomePage/RighSidebar/Suggestions";

export default function Home() {
  return (
    <div className="my-container grid grid-cols-3 py-28">
      <div className="col-span-2">
        <Feed />
      </div>
  
     <div className="">
     <MiniProfile />
      <Suggestions />
     </div>
    
    </div>
  );
}
