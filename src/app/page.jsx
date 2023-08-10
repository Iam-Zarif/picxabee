import Feed from '@/Components/Feed'
import Modal from '@/Components/Modal'
import Nav from '@/Components/Nav'

export default function Home() {
  return(
    
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      {/* Header */}
      <Nav />
      
      {/* Feed  */}
      <Feed />
      {/* Modal  */}
      <Modal />
    </div>

    
    
  )
}
