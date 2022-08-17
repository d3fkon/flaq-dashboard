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
      <section className="flex min-w-full min-h-screen">
        <div id="sidebar" className="flex flex-col bg-white md:w-80">
          <div className="flex items-center my-10">
            <span className="ml-8">
              <FlaqIcon />
            </span>
          </div>

          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col">
              <div className="flex py-3 bg-black text-white rounded-r-[1.25rem] text-sm">
                <span className="flex items-center justify-center ml-8">
                  <DashboardIcon />
                </span>
                <span className="flex items-center justify-center ml-3 font-semibold">
                  Dashboard
                </span>
              </div>

              <div className="flex py-3 rounded-r-[1.25rem] text-sm">
                <span className="flex items-center justify-center ml-8">
                  <EventsIcon />
                </span>
                <span className="flex items-center justify-center ml-3 font-semibold">
                  Events
                </span>
              </div>

              <div className="flex py-3 rounded-r-[1.25rem] text-sm">
                <span className="flex items-center justify-center ml-8">
                  <LibraryIcon />
                </span>
                <span className="flex items-center justify-center ml-3 font-semibold">
                  Library
                </span>
              </div>
            </div>

            <div>
              <div className="flex py-3 rounded-r-[1.25rem] text-sm mb-10">
                <span className="flex items-center justify-center ml-8">
                  <LogoutIcon />
                </span>
                <span className="flex items-center justify-center ml-3 font-semibold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-100 grow md:flex-row">
          <div id="main-content" className="px-10 basis-7/12">
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
                <Button size="lg">+ Create</Button>
              </div>
            </div>

            <div id="my-content" className="text-4xl font-extrabold ">
              <h1 className="mt-10 mb-7">My Content</h1>
              <div
                id="my-content-card"
                className="relative px-6 py-4 rounded-[30px] shadow-md border border-slate-300 shadow-slate-400"
              >
                <div className="absolute top-3 right-2">
                  <DoubleDot />
                </div>
                <div className="w-4 h-4 mb-3">
                  {/* <PlayIcon /> */}
                  <Image
                    src={
                      'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg'
                    }
                    height="16px"
                    width="16px"
                    alt="Uchiha Itachi"
                  />
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

          <div id="recent-content" className="px-8 grow">
            <div>
              <div
                id="profile-component"
                className="flex items-center justify-between mt-10"
              >
                <div className="flex items-center gap-3">
                  <div className="items-center justify-center d-flex">
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
                  <span className="flex items-center justify-center">
                    <BellIcon />
                  </span>
                  <span className="flex items-center justify-center">
                    <MailIcon />
                  </span>
                </div>
              </div>

              <h1 className="text-2xl font-bold my-7">Learning History</h1>
              <div id="learning-history " className="flex flex-col gap-8">
                <div
                  id="history-card"
                  className="flex flex-row items-center justify-between p-8 shadow-md border-slate-300 rounded-3xl shadow-slate-400"
                >
                  <div>
                    <p className="text-base font-bold">Project Time Tracker</p>
                    <span className="text-sm text-gray-500">
                      You can start tracking
                    </span>
                  </div>
                  <div>
                    <span className="flex items-center justify-center">
                      <PlayIcon />
                    </span>
                  </div>
                </div>

                <div
                  id="history-card"
                  className="flex flex-row items-center justify-between p-8 leading-tight tracking-widest shadow-2xl border-slate-300 rounded-3xl shadow-slate-400"
                >
                  <div>
                    <p className="text-base font-bold">Project Time Tracker</p>
                    <span className="text-sm text-gray-500">
                      You can start tracking
                    </span>
                  </div>
                  <div>
                    <span className="flex items-center justify-center">
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
