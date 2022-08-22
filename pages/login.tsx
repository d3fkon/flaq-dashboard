import { useRouter } from 'next/router'
import React from 'react'
import { FlaqLoginIcon } from '../icons/FlaqLoginIcon'
import { FaDiscord } from 'react-icons/fa'
const Login = () => {
  const router = useRouter()
  return (
    <React.Fragment>
      <div className="bg-login-img h-screen min-w-full bg-no-repeat bg-cover font-secondary">
        <div className="h-full flex justify-center items-center">
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
                onClick={() => router.push('/')}
              >
                <span className='flex items-center justify-center'>
                  <FaDiscord size='1.25rem' color='white'/>
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
