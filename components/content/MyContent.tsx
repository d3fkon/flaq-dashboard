import React from 'react'
import Image from 'next/image'

import { Button } from '../../common/Button'
import { DoubleDot } from '../../icons/DoubleDot'
import { useRouter } from 'next/router'

const MyContent = (props: any) => {
  const { setShowCreate } = props
  const handleCreateClick = ()=> {
    
  }
  return (
    <React.Fragment>
        <div
          id="main-header"
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-2xl text-[#9999A5]">Web3 Slang #138</p>
            <p className="text-2xl font-extrabold">ngmi = not gonna make it</p>
          </div>
          <div>
            <Button size="lg" onClick={()=> setShowCreate(true)}>+ Create</Button>
          </div>
        </div>

        <div id="my-content" className="text-4xl font-extrabold ">
          <h1 className="mt-10 mb-7">My Content</h1>
          <div id="cards-container">
            <div
              id="my-content-card"
              className="flex flex-col gap-2 rounded-3xl p-6 shadow-flaq"
            >
              <div className="flex justify-between items-center">
                <div className="h-16 w-16 rounded-lg">
                  <Image
                    src={
                      'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg'
                    }
                    height="100%"
                    width="100%"
                    alt="Uchiha Itachi"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <DoubleDot />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  New BlockChain and Future
                </p>
              </div>
              <div>
                <p className="text-base font-normal text-gray-400 max-w-xs leading-none">
                  A short video on why Neo Blockchain is potentially the biggest
                  player in...
                </p>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default MyContent
