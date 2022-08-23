import { FormikProps, useFormik, yupToFormErrors } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../common/Button'
import Label from '../../common/Label'
import { VideoUploadIcon } from '../../icons/VideoUploadIcon'
import { contentOptions } from './content.constants'
import PreviewImage from './PreviewImage'
import * as Yup from 'yup'

const ContentForm = () => {
  const [activeContentType, setActiveContentType] = useState(contentOptions[0])
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  interface MyValues {
    image: string
    name: string
    description: string
    contentType: string
    videoLink: string
    article: string
  }
  const initialValues = {
    image: '',
    name: '',
    description: '',
    contentType: contentOptions[0].label,
    videoLink: '',
    article: '',
  }
  const handleCustomChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e) return
    const { name, value, files } = e.currentTarget
    if (name === 'image') {
      formik.setFieldValue('image', files && files[0])
    } else {
      formik.handleChange(e)
    }
  }

  const validationSchema = Yup.object({
    // image: Yup.object.required("Please upload an image"),
    name: Yup.string().required('Name is Required*'),
    description: Yup.string().required('Description is Required*'),
    contentType: Yup.string().required('contentType is Required*'),
    videoLink: Yup.string().when('contentType', {
      is: 'Video' || 'Video + Article',
      then: Yup.string().required('Video Link is Required*'),
    }),
    article: Yup.string().when('contentType', {
      is: 'Article' || 'Video + Article',
      then: Yup.string().required('Article is Required*'),
    }),
  })

  // const formik = useFormik<MyValues>({});

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues,
    validationSchema,
    onSubmit: () => {
      console.log(formik.values)
      formik.resetForm()
      setActiveContentType(contentOptions[0])
    },
  })

  const videoType = (
    <>
      <div>
        <div>
          <h1 className="text-[#818BF5] text-xl font-semibold pb-2">Upload</h1>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Label htmlFor="">Youtube Link</Label>
          <input
            type="text"
            name="videoLink"
            value={formik.values.videoLink}
            onChange={handleCustomChange}
            className="p-2 border border-black rounded-md"
          />
          {formik.errors.videoLink && formik.touched.videoLink ? (
            <span className="text-xs text-red-500">
              {formik.errors.videoLink}
            </span>
          ) : null}
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
            name="article"
            value={formik.values.article}
            onChange={handleCustomChange}
          />
          {formik.errors.article && formik.touched.article ? (
            <span className="text-xs text-red-500">
              {formik.errors.article}
            </span>
          ) : null}
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
      <form
        action=""
        className="flex flex-col gap-6 overflow-scroll max-h-[36rem]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-4 px-4 py-2 overflow-y-auto">
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
                  <input
                    hidden
                    type="file"
                    name="image"
                    onChange={handleCustomChange}
                    ref={imageInputRef}
                  />
                  {formik.values.image ? (
                    <span
                      className="w-24 h-24 rounded-md"
                      onClick={() => {
                        imageInputRef.current && imageInputRef?.current?.click()
                      }}
                    >
                      <PreviewImage file={formik.values.image} />
                    </span>
                  ) : (
                    <span
                      className="w-24 h-24 bg-gray-300 rounded-md"
                      onClick={() => {
                        imageInputRef.current && imageInputRef?.current?.click()
                      }}
                    ></span>
                  )}
                </div>
                <div className="flex flex-col gap-4 grow">
                  <div className="flex flex-col">
                    <Label htmlFor="">Name</Label>
                    <input
                      type="text"
                      className="p-2 border rounded-md border-slate-600"
                      name="name"
                      value={formik.values.name}
                      onChange={handleCustomChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <span className="text-xs text-red-500">
                        {formik.errors.name}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="">Describe your content</Label>
                    <input
                      type="text"
                      className="h-20 p-2 border rounded-md border-slate-600"
                      name="description"
                      value={formik.values.description}
                      onChange={handleCustomChange}
                    />
                    {formik.errors.description && formik.touched.description ? (
                      <span className="text-xs text-red-500">
                        {formik.errors.description}
                      </span>
                    ) : null}
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
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              {contentOptions?.map((content) => {
                return (
                  <div
                    key={content.id.toString()}
                    className={`basis-full md:basis-1/3 grow flex flex-col gap-2 pl-4 pt-8 pb-4 pr-2 cursor-pointer rounded-md border border-gray-400 ${
                      activeContentType.id === content.id &&
                      'border-violet-500 bg-slate-100'
                    }`}
                    onClick={() => {
                      formik.setFieldValue('videoLink', '')
                      formik.setFieldValue('article', '')
                      formik.setFieldValue('contentType', content.label)
                      setActiveContentType(content)
                    }}
                  >
                    <span>
                      <VideoUploadIcon />
                    </span>
                    <span className="text-sm font-semibold">
                      {content.label}
                    </span>
                    <span className="text-xs text-gray-500">
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
          <Button type="submit" size="md">
            Done
          </Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ContentForm
