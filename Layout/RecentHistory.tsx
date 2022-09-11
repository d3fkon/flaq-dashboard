import React from 'react'
import { useSelector } from 'react-redux'
import { BellIcon } from '../icons/BellIcon'
import { MailIcon } from '../icons/MailIcon'
import { PlayIcon } from '../icons/PlayIcon'

const RecentHistory = () => {
  const { userInfo } = useSelector((store: any) => store.user)
  return (
    <React.Fragment>
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
              <span className="text-base font-semibold">{userInfo?.username}</span>
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
            className="flex flex-row items-center justify-between p-8 shadow-flaq rounded-3xl "
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
            className="flex flex-row items-center justify-between p-8 shadow-flaq  rounded-3xl"
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
    </React.Fragment>
  )
}

export default RecentHistory
