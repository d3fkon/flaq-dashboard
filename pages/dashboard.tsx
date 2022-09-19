import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import { Button } from '../common/Button'
import Content from '../components/content/Content'
import { getRequest } from '../services/api.service'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const token = localStorage.getItem('accessToken');
      !token && router.replace('/login')
    }
  },[])
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  )
}
export async function getServerSideProps(context:any) {
  return {
    props: {}, 
  }
}

export default Home
