import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { getRequest, postRequest } from '../services/api.service'

const AuthMiddlePage = () => {
  const router = useRouter();
  useEffect(()=>{
    if(router?.query?.code){
      const getAuthData = async () => {
        const payload = {code: router?.query?.code}
        const res = await postRequest('auth/discord-auth', payload)
        const userData = res.data;
        localStorage.setItem('accessToken', userData?.accessToken);
        localStorage.setItem('userInfo', JSON.stringify(userData?.data));
        localStorage.setItem('refreshToken', userData?.refreshToken);
        router.replace('/dashboard')
      }
      getAuthData();
    }
   
  },[router?.query?.code])
  return (
    <div>Authenticating</div>
  )
}


export default AuthMiddlePage