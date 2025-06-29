import { useState } from 'react'
import CryptoJS from 'crypto-js'


export default function App(){

  const [input, setInput] = useState('')
  const [key,setKey] = useState('')
  const [encrypted, setEncrypted] =useState('')
  const [decrypted, setDecrypted] =useState('')
  const [content, setContent] =useState('')
  

  const handleEncrypt = () =>{
    if(!key){
      alert('secret key cannot be empty')
      return
    }
    
    const cipher = CryptoJS.AES.encrypt(input,key).toString()
    setEncrypted(cipher)
    setContent(cipher)
  }
  
  const handleDecrypt = () =>{
    if(!key){alert('secret key cannot be empty')
      return
    }
    try{
      const bytes = CryptoJS.AES.decrypt(input,key)
      const plain = bytes.toString(CryptoJS.enc.Utf8)
      setDecrypted(plain)
      setContent(plain)
    } catch (e){
        setContent('Decryption Failed')
    }
  }


  return(
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center py-2  lg:flex-row lg:justify-center">
      <div className='flex flex-col items-center '>
        <div className=" text-2xl text-white mb-2">Enter Text To <span className='text-green-400' >Encrypt</span>/<span className='text-red-500' >Decrypt</span></div>
        <textarea className=" w-80 h-70 bg-rose-400 rounded-3xl px-3 py-2 text-sm resize-none lg:w-120 lg:h-110 lg:text-2xl " value={input} onChange={(e)=> setInput(e.target.value)} placeholder='enter the secret key and press red button, or enter your text here and press the green button. the secret key has to be entered by you, and no there is no database of messages encrypted or decrypted with the creator, it is just a front-end.' />
          <input type="text" className='w-50 h-10 bg-yellow-500 px-2 py-1 mt-4 rounded-xl' value={key} onChange={(e)=>{setKey(e.target.value)}} placeholder='enter secret key here' />
      </div>

      <div className='flex lg:flex-col'>
      <div className="w-10 h-10 bg-green-400 m-5 flex justify-center items-center rotate-180 lg:rotate-90 lg:w-20 lg:h-20 active:opacity-70 active:scale-75 transform transition rounded-2xl " onClick={handleEncrypt}>
        <svg className="w-8 h-8" viewBox="0 -19.04 75.803 75.803" xmlns="http://www.w3.org/2000/svg">
        <g id="Group_66" data-name="Group 66" transform="translate(-619.375 -560.018)">
        <path id="Path_58" data-name="Path 58" d="M695.178,596.248a1.5,1.5,0,0,1-2.561,1.061l-33.56-33.557a2.53,2.53,0,0,0-3.564,0l-33.558,33.557a1.5,1.5,0,0,1-2.121-2.121l33.557-33.557a5.531,5.531,0,0,1,7.808,0l33.559,33.557A1.494,1.494,0,0,1,695.178,596.248Z" fill="#0c2c67"/>
        </g>
        </svg>
      </div>
      <div className="w-10 h-10 bg-red-500 m-5 flex justify-center items-center rotate-180 lg:rotate-90 lg:w-20 lg:h-20 active:opacity-70 active:scale-75 transform transition rounded-2xl" onClick={handleDecrypt}>
        <svg className="w-8 h-8" viewBox="0 -19.04 75.803 75.803" xmlns="http://www.w3.org/2000/svg">
        <g id="Group_66" data-name="Group 66" transform="translate(-619.375 -560.018)">
        <path id="Path_58" data-name="Path 58" d="M695.178,596.248a1.5,1.5,0,0,1-2.561,1.061l-33.56-33.557a2.53,2.53,0,0,0-3.564,0l-33.558,33.557a1.5,1.5,0,0,1-2.121-2.121l33.557-33.557a5.531,5.531,0,0,1,7.808,0l33.559,33.557A1.494,1.494,0,0,1,695.178,596.248Z" fill="#0c2c67"/>
        </g>
        </svg>
      </div>
      </div>
      <div>
        <div className="text-center text-2xl text-white mb-2">Result</div>
        <textarea placeholder='you will see your result here' className=" w-80 h-70 bg-rose-400 rounded-3xl resize-none text-sm break-words px-3 py-2 lg:w-120 lg:h-120 lg:text-2xl" readOnly value={content}></textarea>
      </div>
    </div>
  )
}