import React from 'react'
import { Button } from '../../common/Button'
import Label from '../../common/Label'
import { Cross } from '../../icons/Cross'

const CreateContent = (props: any) => {
  const { setShowCreate } = props

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center gap-20">
        <div id="main-header" className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-extrabold">Create Content</p>
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

        <div className='flex flex-col gap-4'>
          <div>
            <div>
              <h1 className="text-[#818BF5] text-xl font-semibold pb-2">
                Basic Information
              </h1>
            </div>

            <div>
              <form action="" className="flex items-start gap-8">
                <div className="flex flex-col">
                  <Label htmlFor="">Logo</Label>
                  <span className="h-24 w-24 bg-gray-300 rounded-md"></span>
                </div>
                <div className="flex flex-col gap-4">
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
              </form>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-[#818BF5] text-xl font-semibold pb-2">
                Content Type
              </h1>
            </div>
          </div>


        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateContent
