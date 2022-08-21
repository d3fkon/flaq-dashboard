import React from 'react'
import RecentHistory from './RecentHistory'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <section className="flex min-w-full min-h-screen font-abc">
        <Sidebar />
        <div className="flex flex-col h-100 grow md:flex-row">
          <div id="main-content" className="mx-10 basis-7/12">
            {children}
          </div>
          <div id="recent-content" className="mx-8 grow">
            <RecentHistory />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Layout
