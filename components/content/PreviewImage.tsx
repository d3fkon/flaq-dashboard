import React, { useState } from 'react'

const PreviewImage = ({ file } : any) => {
  const [preview, setPreview] = useState('')
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    //@ts-ignore
    setPreview(reader.result)
  }
  return <div className='h-full w-full'>
    <img src={preview} alt="prevew" className='h-full w-full rounded-md'/>
  </div>
}

export default PreviewImage
