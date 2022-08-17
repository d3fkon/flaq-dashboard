import React from 'react'
import type { NextPage } from 'next'
import { FlaqIcon } from '../icons/FlaqIcon'
import { DashboardIcon } from '../icons/DashboardIcon'
import { EventsIcon } from '../icons/EventsIcon'
import { LibraryIcon } from '../icons/LibraryIcon'
import { LogoutIcon } from '../icons/LogoutIcon'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <section className="min-h-screen min-w-full border border-indigo-600 flex">
        <div id="sidebar" className="bg-white md:w-64 flex flex-col">
          <div className="flex items-center my-10">
            <span className="ml-8">
              <FlaqIcon />
            </span>
          </div>

          <div className="grow flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex py-3 bg-black text-white rounded-r-[1.25rem] text-sm">
                <span className="flex justify-center items-center ml-8">
                  <DashboardIcon />
                </span>
                <span className="flex justify-center items-center font-semibold ml-3">
                  Dashboard
                </span>
              </div>

              <div className="flex py-3 rounded-r-[1.25rem] text-sm">
                <span className="flex justify-center items-center ml-8">
                  <EventsIcon />
                </span>
                <span className="flex justify-center items-center font-semibold ml-3">
                  Events
                </span>
              </div>

              <div className="flex py-3 rounded-r-[1.25rem] text-sm">
                <span className="flex justify-center items-center ml-8">
                  <LibraryIcon />
                </span>
                <span className="flex justify-center items-center font-semibold ml-3">
                  Library
                </span>
              </div>
            </div>

            <div>
              <div className="flex py-3 rounded-r-[1.25rem] text-sm mb-10">
                <span className="flex justify-center items-center ml-8">
                  <LogoutIcon />
                </span>
                <span className="flex justify-center items-center font-semibold ml-3">
                  Logout
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="h-100 grow flex flex-col md:flex-row">
          <div id="main-content" className='basis-7/12 border border-red-700'>main content</div>
          <div id="recent-content" className="grow border border-green-700">
            <div>
              <div>
                {/* <div><Image src="https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg" layout='fill'/></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
