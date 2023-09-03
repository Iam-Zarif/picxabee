import Feed from "@/components/HomePage/Feed/Feed";
import MiniProfile from "@/components/HomePage/RighSidebar/MiniProfile";
import Suggestions from "@/components/HomePage/RighSidebar/Suggestions";
import LeftSideBar from "@/components/HomePage/leftSidebar/LeftSideBar";

export default function Home() {
  return (
    <div className="my-container grid lg:grid-cols-4 lg:gap-3 ">

      <div>
        <LeftSideBar />
      </div>

      <div className="col-span-2">
        <Feed />
      </div>

      <div >
        <MiniProfile />
        <Suggestions />
      </div>

    </div>
  );
}
