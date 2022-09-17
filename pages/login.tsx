import { useRouter } from 'next/router'
import React from 'react'
import { FlaqLoginIcon } from '../icons/FlaqLoginIcon'
import { FaDiscord } from 'react-icons/fa'
import axios from 'axios'
import Image from 'next/image'
import image from '../public/flaq-login.png'
const Login = () => {
  const router = useRouter()
  const authURL =
    'https://discord.com/api/oauth2/authorize?client_id=1007966558527684688&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fverify&response_type=code&scope=identify%20email%20guilds.join'
  const handleLogin = async () => {
    window.open(authURL, '_self')
  }
  return (
    <React.Fragment>
      <div className="h-screen min-w-full bg-no-repeat bg-cover font-secondary relative">
        <div className='absolute inset h-screen w-screen border-10 border-red-500'>
        <Image src={image} objectFit="cover" layout='fill'/>
        </div>
        <div className="h-full flex justify-center items-center relative">
          <div className="max-w-[30rem] flex flex-col items-center gap-20">
            <div className="flex items-center justify-center gap-2">
              <span>
                <FlaqLoginIcon />
              </span>
              <span className="text-white text-xl ">flaq</span>
            </div>
            <div>
              <h1 className="text-5xl text-white font-bold text-center leading-[4rem]">
                welcome to the flaq academy
              </h1>
            </div>
            <div>
              <button
                className=" flex items-center justify-center gap-2 px-6 py-2 bg-violet-500 rounded-md hover:bg-violet-600"
                onClick={handleLogin}
              >
                <span className="flex items-center justify-center">
                  <FaDiscord size="1.25rem" color="white" />
                </span>
                <span className="text-white text-sm">Connect with discord</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
