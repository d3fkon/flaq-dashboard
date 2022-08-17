import React from 'react'
import type { NextPage } from 'next'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { FlaqIcon } from '../icons/FlaqIcon'
import { DashboardIcon } from '../icons/DashboardIcon'
import { EventsIcon } from '../icons/EventsIcon'
import { LibraryIcon } from '../icons/LibraryIcon'
import { LogoutIcon } from '../icons/LogoutIcon'
import Image from 'next/image'
import { PlayIcon } from '../icons/PlayIcon'
import { BellIcon } from '../icons/BellIcon'
import { MailIcon } from '../icons/MailIcon'
import { Button } from '../common/Button'
import { DoubleDot } from '../icons/DoubleDot'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <section className="min-h-screen min-w-full flex">
        <div id="sidebar" className="bg-white md:w-80 flex flex-col">
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
          <div id="main-content" className="basis-7/12 px-10">
            <div
              id="main-header"
              className="flex items-center justify-between mt-14"
            >
              <div>
                <p className="text-2xl text-[#9999A5]">Web3 Slang #138</p>
                <p className="text-2xl font-extrabold">
                  ngmi = not gonna make it
                </p>
              </div>
              <div>
                {/* <Button className="text-xl px-8 py-4 rounded-[1.25rem]">
                  + Create
                </Button> */}
              </div>
            </div>

            <div id="my-content" className=" text-4xl font-extrabold">
              <h1 className="mt-10 mb-7">My Content</h1>
              <div
                id="my-content-card"
                className="relative px-6 py-4 rounded-[30px] shadow-md border border-slate-300 shadow-slate-400"
              >
                <div className="absolute top-3 right-2">
                  <DoubleDot />
                </div>
                <div className="h-4 w-4 mb-3">
                  {/* <PlayIcon /> */}
                  <Image src={"https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg"} height="16px" width="16px"/>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    New BlockChain and Future
                  </p>
                  <p className="text-base text-[#b5b5b5] max-w-xs ">
                    A short video on why Neo Blockchain is potentially the
                    biggest player in...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="recent-content"
            className="grow px-8"
          >
            <div>
              <div
                id="profile-component"
                className="flex items-center justify-between mt-10"
              >
                <div className="flex items-center gap-3">
                  <div className="d-flex justify-center items-center">
                    <PlayIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">Rushhy#9481</span>
                    <span className="text-sm font-medium text-slate-400">
                      Flaq member
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="flex justify-center items-center">
                    <BellIcon />
                  </span>
                  <span className="flex justify-center items-center">
                    <MailIcon />
                  </span>
                </div>
              </div>

              <div id="learning-history">
                <h1 className="text-2xl font-bold my-7">Learning History</h1>

                <div
                  id="history-card"
                  className="flex flex-row justify-between items-center p-4 mb-4 border border-slate-300 rounded-3xl shadow-md shadow-slate-400"
                >
                  <div>
                    <p className="text-base font-bold">Project Time Tracker</p>
                    <span className="text-gray-500 text-sm">
                      You can start tracking
                    </span>
                  </div>
                  <div>
                    <span className="flex justify-center items-center">
                      <PlayIcon />
                    </span>
                  </div>
                </div>

                <div
                  id="history-card"
                  className="flex flex-row justify-between items-center p-4 mb-4 border border-slate-300 rounded-3xl shadow-lg shadow-slate-400"
                >
                  <div>
                    <p className="text-base font-bold">Project Time Tracker</p>
                    <span className="text-gray-500 text-sm">
                      You can start tracking
                    </span>
                  </div>
                  <div>
                    <span className="flex justify-center items-center">
                      <PlayIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
