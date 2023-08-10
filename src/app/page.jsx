import Feed from '@/components/Feed'
import Modal from '@/components/Modal'
import Nav from '@/components/Nav'

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
