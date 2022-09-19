import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import { Button } from '../common/Button'
import Content from '../components/content/Content'
import { getRequest } from '../services/api.service'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  )
}
export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}

export default Home
