

import CreatePost from "./createPost/CreatePost";
import Stories from "./story/Stories";
import Posts from "./postCard/Posts";

const Feed = () => {
  
  return (
   <div >

    <Stories />
     <CreatePost/>
     <Posts />
   </div>
  );
};

export default Feed;
