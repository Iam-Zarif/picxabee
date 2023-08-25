
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <div className='flex flex-col justify-between bg-green-500 h-full w-full overflow-hidden'>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat;        