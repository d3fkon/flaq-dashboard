import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getRequest, postRequest } from '../services/api.service'

const AuthMiddlePage = () => {
  const router = useRouter()
  useEffect(() => {
    if (router?.query?.code) {
      const getAuthData = async () => {
        const payload = { code: router?.query?.code }
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/discord-auth`,
          payload,
        )
        const userData = res.data
        await localStorage.setItem('accessToken', userData?.accessToken)
        await localStorage.setItem('userInfo', JSON.stringify(userData?.data))
        await localStorage.setItem('refreshToken', userData?.refreshToken)
        router.replace('/dashboard')
      }
      getAuthData()
    }
  }, [router])
  return <div>Authenticating</div>
}

export default AuthMiddlePage
