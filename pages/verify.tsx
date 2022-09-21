import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const AuthMiddlePage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router?.query?.code) {
      const getAuthData = async () => {
        try {
          const payload = {code: router?.query?.code}
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/discord-auth`, payload)
          !res.data?.accessToken && router.replace('/login')
          const userData = res.data;
          await localStorage.setItem('accessToken', userData?.accessToken);
          await localStorage.setItem('userInfo', JSON.stringify(userData?.data));
          await localStorage.setItem('refreshToken', userData?.refreshToken);
          router.replace('/dashboard');
          setTimeout(()=>{toast.success(`Hey ${userData?.data?.username}`)},1000) 
        } catch (error) {
          router.replace('/login');
          toast.error("Something went wrong please try again!")
        }
      }
      getAuthData()
    }
    
  }, [router])
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <HashLoader color='white' size={100}/>
    </div>
  )
}

export default AuthMiddlePage
