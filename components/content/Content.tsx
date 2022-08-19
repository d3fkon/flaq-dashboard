import React, { useState } from 'react'
import CreateContent from './CreateContent'
import MyContent from './MyContent'

const Content = () => {
  const [showCreate, setShowCreate] = useState(false)
  return (
    <React.Fragment>
      <div className='pt-14'>
      {showCreate ? <CreateContent setShowCreate={setShowCreate}/> : <MyContent setShowCreate={setShowCreate}/>}
      </div>
    </React.Fragment>
  )
}

export default Content
