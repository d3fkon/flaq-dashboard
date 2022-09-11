import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from '../../services/api.service';
import { setUserInfo } from '../../store/actions/user';
import CreateContent from './CreateContent'
import MyContent from './MyContent'

const Content = () => {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <React.Fragment>
      <div className='pt-14'>
      {showCreate ? <CreateContent setShowCreate={setShowCreate}/> : <MyContent setShowCreate={setShowCreate}/>}
      </div>
    </React.Fragment>
  )
}

export default Content
