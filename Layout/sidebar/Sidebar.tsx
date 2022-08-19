import React, { useEffect, useState } from 'react'
import { DashboardIcon } from '../../icons/DashboardIcon'
import { EventsIcon } from '../../icons/EventsIcon'
import { FlaqIcon } from '../../icons/FlaqIcon'
import { LibraryIcon } from '../../icons/LibraryIcon'
import { LogoutIcon } from '../../icons/LogoutIcon'
import { sidebarOptions } from './sidebar.constants'

const Sidebar = () => {
  const [activePageId, setActivePageId] = useState(1)

  const getIcon = (option: any) => {
    switch (option.id) {
      case 1:
        return <DashboardIcon />
      case 2:
        return <EventsIcon />
      case 3:
        return <LibraryIcon />
      case 4:
        return <LibraryIcon />
      case 5:
        return <LibraryIcon />
    }
  }
  return (
    <>
      <div id="sidebar" className="flex flex-col bg-white md:w-80">
        <div className="flex items-center my-10">
          <span className="ml-8">
            <FlaqIcon />
          </span>
        </div>

        <div className="flex flex-col justify-between grow">
          <div className="flex flex-col">
            {sidebarOptions.map((option) => {
              return (
                <div
                  id={option.id.toString()}
                  className={`flex items-center gap-4 py-3 rounded-r-[1.25rem] text-sm hover:bg-gray-100 cursor-pointer ${
                    activePageId === option.id && 'bg-black text-white hover:bg-black'
                  }`}
                  onClick={() => setActivePageId(option.id)}
                >
                  <span className="flex items-center justify-center ml-8">
                    {getIcon(option)}
                  </span>
                  <span className="flex items-center justify-center font-semibold">
                    {option.label}
                  </span>
                </div>
              )
            })}
          </div>

          <div>
            <div className="flex items-center gap-4 py-3 rounded-r-[1.25rem] text-sm mb-10 hover:bg-gray-100 cursor-pointer" >
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
    </>
  )
}

export default Sidebar
