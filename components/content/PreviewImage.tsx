import React, { useState } from 'react'

const PreviewImage = ({ file }: any) => {
  const [preview, setPreview] = useState('')
  const reader = new FileReader();

  if(file){
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreview(reader.result!.toString())
    }
  }

  return (
    <div className="w-full h-full">
      <img src={preview} alt="preview" className="w-full h-full rounded-md" />
    </div>
  )
}

export default PreviewImage
