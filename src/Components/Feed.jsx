import MiniProfiles from './MiniProfiles';
import PostBox from './PostBox';
import Posts from './Posts';
// import Stories from './Stories';
import Suggestions from './Suggestions';
import Stories from './stories/stories/Stories';

const Feed = () => {
  return (
    
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            {/* Stories  */}
            <Stories></Stories>
            {/* Postbox  */}
            {/* <PostBox /> */}
            <Posts />
        </section>
        <section>
            {/* Mini Profile  */}
            <MiniProfiles />
        
            {/* Suggesstions  */}
            <Suggestions />
        </section>
    </main>
    
  )
}

export default Feed;