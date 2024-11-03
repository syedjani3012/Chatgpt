import chatgpt from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import chat from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import upgrade from './assets/rocket.svg'
import user from './assets/user-icon.png'
import gptlogo from './assets/chatgptLogo.svg'
import send from './assets/send.svg'
import { sendMsgToOpenAI } from './opeai'
import { useState } from 'react'
function App() {

  const [Input, setInput]=useState('')
  const [userinput,setuserinput]=useState('')
  const [gptout,setgptout]=useState('')
  const [gptimg,setgptimg]=useState(false)

  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  const handleSend=async ()=>{
    const res= await sendMsgToOpenAI(Input)
    setuserinput(Input)
    setgptout(res) 
    setgptimg(true)
  }
  const handlenew=()=>{
    setgptout('Hey I am chatgpt, let me know how can i help you')
    setgptimg(true)
    setuserinput('')
  }

  const handleprog=async()=>{
    const prog= await sendMsgToOpenAI('What is programming?')
    setuserinput('What is programming?')
    setgptout(prog) 
    setgptimg(true)
  }

  const handleapi=async()=>{
    const prog= await sendMsgToOpenAI('How to use an API?')
    setuserinput('How to use an API?')
    setgptout(prog) 
    setgptimg(true)
  }

  return (
    <div className='bg-blue-950 h-screen w-full flex'>
    <div className='flex flex-col h-full w-1/4 border-2'>
    <div>
      <div className='flex  gap-2 p-5'><img src={chatgpt} alt='chatgpt'></img> <span className='text-2xl text-white font-semibold'>ChatGPT</span></div>
      <div className='flex ml-6 mt-5'><button className='flex gap-2 items-center bg-purple-600 p-3 rounded-lg w-60' onClick={handlenew}><img className='h-10 w-10' src={addbtn} alt='addbtn'></img> <span className='text-xl text-white font-semibold'> New Chat </span> </button></div>
      <div className='ml-6 mt-5'><button className='flex gap-2 border-2 p-3 w-60' onClick={handleprog} ><img src={chat} alt='programming'></img><span className='text-lg font-normal text-white'> What is programming? </span></button></div>
      <div className='ml-6 mt-5'><button className='flex gap-2 border-2 p-3 w-60' onClick={handleapi} ><img src={chat} alt='api'></img><span className='text-lg font-normal text-white'> How to use an API? </span></button></div>
    </div>
    <div className='mt-auto ml-6 mb-5'>
     <div className='flex  gap-2 p-5'><button className='flex items-center gap-2'><img src={home} alt='home'></img> <span className='text-xl text-white '>Home</span></button></div>
     <div className='flex  gap-2 p-5'><button className='flex items-center gap-2'><img src={saved} alt='saved'></img> <span className='text-xl text-white '>Saved </span></button></div>
     <div className='flex  gap-2 p-5'><button className='flex items-center gap-2'><img src={upgrade} alt='upgrade'></img> <span className='text-xl text-white'>Upgrade to pro</span></button></div>
    </div>
    </div>
    <div className='flex-1 flex flex-col items-center justify-center ml-10'>
      <div className='overflow-y-auto scroll-smooth w-100% max-w-6xl h-[calc(100vh-17rem)]'>
      <div className={gptimg? 'm-1 pl-2 pr-3 flex text-justify mr-5' : ''}><img src={gptimg? user: ''} className='object-contain w-14 mr-3 border-r-2'></img> <p className='text-white'>{userinput}</p></div>
      <div className={gptimg? 'm-1 mt-20 mr-5 pl-2 pr-3 flex text-justify items-start bg-slate-600 p-10': ''}><img src={gptimg? gptlogo: ""} className='object-contain w-14 mr-3 '></img> <p className='text-white'>{gptout}</p></div>
      </div>
      <div className="relative w-1/2 top-24">
        <input
          type="text"
          placeholder="Send a message" value={Input} onChange={handleInput}
          className="w-full p-3 pr-12 border rounded-xl border-blue-600 text-white outline-none text- bg-transparent placeholder:text-slate-200" 
        />
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-3" onClick={handleSend}
        >
          <img src={send} alt="Send" className="h-6 w-6" />
        </button>
      </div>
    <p className='relative top-24 text-white'>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 version</p>
    </div>
    </div>
  );
}

export default App; 
