import React from 'react'
import { Button } from '../../common/Button'
import Label from '../../common/Label'
import { Cross } from '../../icons/Cross'
import { VideoUploadIcon } from '../../icons/VideoUploadIcon'
import { contentOptions } from './content.constants'
import ContentForm from './ContentForm'

const CreateContent = (props: any) => {
  const { setShowCreate } = props
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center gap-14">
        <div id="main-header" className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-extrabold">Create Content</p>
          </div>

          <div className="flex items-center justify-center">
            <span
              className="flex items-center justify-center p-1 rounded-md bg-gray-300 cursor-pointer"
              onClick={() => setShowCreate(false)}
            >
              <Cross />
            </span>
          </div>
        </div>

        <ContentForm />
      </div>
    </React.Fragment>
  )
}

export default CreateContent
