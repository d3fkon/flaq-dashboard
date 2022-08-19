import React from 'react'
import RecentHistory from './RecentHistory'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }: any) => {
  // console.log(chidlren)
  return (
    <React.Fragment>
      <section className="flex min-w-full min-h-screen font-abc">
        <Sidebar />
        <div className="flex flex-col h-100 grow md:flex-row">
          <div id="main-content" className="px-10 basis-7/12">
            {children}
          </div>
            <RecentHistory />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Layout
