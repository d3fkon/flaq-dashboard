import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Button } from '../../common/Button'
import { DoubleDot } from '../../icons/DoubleDot'
import { useRouter } from 'next/router'
import { getRequest } from '../../services/api.service'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../store/actions/user'
import { tabs } from './content.constants'

const MyContent = (props: any) => {
  const { setShowCreate } = props
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [campaigns, setCampaigns] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      await getData()
      await getAllCampaigns()
    })()
  }, [])

  useEffect(() => {
    let filter = campaigns?.filter((item: any) => {
      return activeTab?.id === 1
        ? item.status === 'Approved'
        : item.status === 'Pipeline'
    })
    setFilteredData(filter)
  }, [activeTab, campaigns])

  const getData = async () => {
    const res = await getRequest('/creators/profile')
    dispatch(setUserInfo(res.data))
  }

  const getAllCampaigns = async () => {
    const res = await getRequest('/creators/campaigns')
    setCampaigns(res.data[0].campaigns)
  }

  useEffect(() => {
    console.log(filteredData)
  }, [filteredData])
  const handleCreateClick = () => {}
  return (
    <React.Fragment>
      <div id="main-header" className="flex items-center justify-between">
        <div>
          <p className="text-2xl text-[#9999A5]">Web3 Slang #138</p>
          <p className="text-2xl font-extrabold">ngmi = not gonna make it</p>
        </div>
        <div>
          <Button size="lg" onClick={() => setShowCreate(true)}>
            + Create
          </Button>
        </div>
      </div>

      <div id="my-content" className="text-4xl font-extrabold">
        <h1 className="mt-10 mb-7">My Content</h1>

        <div id="tabs-container" className="flex items-center gap-6 mb-6">
          {tabs.map((item) => {
            return (
              <>
                <button
                  className={`text-base ${
                    activeTab.id === item.id && 'text-violet-500'
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item.tab}
                </button>
              </>
            )
          })}
        </div>

        <div id="cards-container" className='flex flex-col justify-center gap-6'>
          {filteredData?.map((data: any) => {
            return (
              <>
                <div
                  id="my-content-card"
                  className="flex flex-col gap-3 rounded-3xl p-6 shadow-flaq"
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
                  <div className='flex flex-col justify-center gap-1'>
                    <p className="text-lg font-semibold leading-none">{data?.title}</p>
                    <p className='text-gray-400 text-xs leading-none'>Content type: {data?.contentType}</p>
                  </div>
                  <div>
                    <p className="text-base font-normal text-gray-400 max-w-md leading-none">
                      {data?.description1?data?.description1: data?.description}
                    </p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyContent
