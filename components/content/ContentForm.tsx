import React, { useState } from 'react'
import { Button } from '../../common/Button'
import Label from '../../common/Label'
import { VideoUploadIcon } from '../../icons/VideoUploadIcon'
import { contentOptions } from './content.constants'

const ContentForm = () => {
  const [activeContentType, setActiveContentType] = useState(contentOptions[0])

  const videoType = (
    <>
      <div >
        <div>
          <h1 className="text-[#818BF5] text-xl font-semibold pb-2">Upload</h1>
        </div>
        <div className='flex justify-center flex-col gap-2'>
          <Label htmlFor="">Youtube Link</Label>
          <input type="text" className="border border-black rounded-md p-2" />
        </div>
      </div>
    </>
  )

  const articleType = (
    <>
      <div>
        <div>
          <h1 className="text-[#818BF5] text-xl font-semibold pb-2">Write</h1>
        </div>
        <div>
          <Label htmlFor="">write something interesting</Label>
          <input
            type="text"
            className="border border-black rounded-md p-2 w-full h-[300px]"
          />
        </div>
      </div>
    </>
  )

  const getContentInput = () => {
    switch (activeContentType.label) {
      case 'Video':
        return videoType
      case 'Article':
        return articleType
      case 'Video + Article':
        return (
          <>
            {videoType}
            {articleType}
          </>
        )
    }
  }
  return (
    <React.Fragment>
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto shadow-ctm-inr px-4 py-2">
          <div>
            <div>
              <h1 className="text-[#818BF5] text-xl font-semibold pb-2">
                Basic Information
              </h1>
            </div>

            <div>
              <div className="flex items-start gap-8">
                <div className="flex flex-col">
                  <Label htmlFor="">Logo</Label>
                  <span className="h-24 w-24 bg-gray-300 rounded-md"></span>
                </div>
                <div className="grow flex flex-col gap-4">
                  <div className="flex flex-col">
                    <Label htmlFor="">Name</Label>
                    <input
                      type="text"
                      className="border border-black rounded-md p-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="">Describe your content</Label>
                    <input
                      type="text"
                      className="border border-black rounded-md p-2 h-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-[#818BF5] text-xl font-semibold pb-2">
                Content Type
              </h1>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-6 ">
              {contentOptions?.map((content) => {
                return (
                  <div
                    key={content.id.toString()}
                    className={`flex flex-col gap-2 min-w-[200px] pl-4 pt-8 pb-4 cursor-pointer rounded-md border-2 border-gray-500 ${
                      activeContentType.id === content.id &&
                      'border-2 border-[#818BF5] bg-slate-100'
                    }`}
                    onClick={() => setActiveContentType(content)}
                  >
                    <span>
                      <VideoUploadIcon />
                    </span>
                    <span className="font-semibold">{content.label}</span>
                    <span className="text-sm text-gray-500">
                      {content.text}
                    </span>
                  </div>
                )
              })}
            </div>
            <div>{getContentInput()}</div>
          </div>
        </div>

        <div>
          <Button size="md">Done</Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ContentForm
