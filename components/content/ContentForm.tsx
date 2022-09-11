import { FormikProps, useFormik, yupToFormErrors } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../common/Button'
import Label from '../../common/Label'
import { VideoUploadIcon } from '../../icons/VideoUploadIcon'
import { contentOptions } from './content.constants'
import PreviewImage from './PreviewImage'
import * as Yup from 'yup'
import { getRequest, postRequest } from '../../services/api.service'
import { createContent, getSignedUrl, uploadDoc } from './content.service'
import axios from 'axios'
import { getCreateContentPayload } from './content.helper'

const ContentForm = () => {
  const [activeContentType, setActiveContentType] = useState(contentOptions[0])
  const [imageFile, setImageFile] = useState('')
  const [articleLogoFile, setArticleLogoFile] = useState('')

  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const articleLogoInputRef = useRef<HTMLInputElement | null>(null)
  interface MyValues {
    image: string
    title: string
    description: string
    contentType: string
    videoLink: string
    articleLogo: string
    articleTitle: string
    articleLink: string
  }

  const initialValues = {
    image: '',
    title: '',
    description: '',
    contentType: contentOptions[0].label,
    videoLink: '',
    articleLogo: '',
    articleTitle: '',
    articleLink: '',
  }

  const handleCustomChange = async (e: React.FormEvent<HTMLInputElement>) => {
    if (!e) return
    const { name, value, files } = e.currentTarget
    if (name === 'image' || name === 'articleLogo') {
      const file: any = files && files[0]
      const { key, url } = await getSignedUrl(file)
      const isUploaded = await uploadDoc(url, file)
      if (isUploaded) {
        const accessFile =`https://flaq-assets.s3.ap-south-1.amazonaws.com/upload/${file.name}`
        name === 'image' && setImageFile(file)
        name === 'articleLogo' && setArticleLogoFile(file)
        formik.setFieldValue(name, accessFile)
      } else {
        console.log('something went wrong try again')
      }
    } else {
      formik.handleChange(e)
    }
  }

  const validationSchema = Yup.object({
    // image: Yup.object.required("Please upload an image"),
    title: Yup.string().required('title is Required*'),
    description: Yup.string().required('Description is Required*'),
    contentType: Yup.string().required('contentType is Required*'),
    videoLink: Yup.string().when('contentType', {
      is: (contentType: string) =>
        contentType === 'Video' || contentType === 'VideoAndArticles',
      then: Yup.string().required('Video Link is Required*'),
    }),
    articleTitle: Yup.string().when('contentType', {
      is: (contentType: string) =>
        contentType === 'Articles' || contentType === 'VideoAndArticles',
      then: Yup.string().required('Article title is Required*'),
    }),

    articleLink: Yup.string().when('contentType', {
      is: (contentType: string) =>
        contentType === 'Articles' || contentType === 'VideoAndArticles',
      then: Yup.string().required('Article Link is Required*'),
    }),
  })

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues,
    validationSchema,
    onSubmit: async () => {
      const createContentPayload = await getCreateContentPayload(formik)
      await createContent(createContentPayload)
      setImageFile('')
      setArticleLogoFile('')
      setActiveContentType(contentOptions[0])
      formik.resetForm()
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
          <h1 className="text-[#818BF5] text-xl font-semibold pb-2">
            Upload Article
          </h1>
        </div>
        <div className="flex flex-row items-start gap-8">
          <div className="flex flex-col justify-center">
            <Label htmlFor="">Article logo</Label>
            <input
              hidden
              type="file"
              name="articleLogo"
              onChange={handleCustomChange}
              ref={articleLogoInputRef}
            />
            {articleLogoFile ? (
              <span
                className="w-24 h-24 rounded-md"
                onClick={() => {
                  articleLogoInputRef.current &&
                    articleLogoInputRef?.current?.click()
                }}
              >
                <PreviewImage file={articleLogoFile} />
              </span>
            ) : (
              <span
                className="w-24 h-24 bg-gray-300 rounded-md"
                onClick={() => {
                  articleLogoInputRef.current &&
                    articleLogoInputRef?.current?.click()
                }}
              ></span>
            )}
          </div>
          <div className="grow flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-center">
              <Label htmlFor="">Article Title</Label>
              <input
                type="text"
                className="p-2 border rounded-md border-slate-600"
                name="articleTitle"
                value={formik.values.articleTitle}
                onChange={handleCustomChange}
              />
              {formik.errors.articleTitle && formik.touched.articleTitle ? (
                <span className="text-xs text-red-500">
                  {formik.errors.articleTitle}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col justify-center">
              <Label htmlFor="">Article Link</Label>
              <input
                type="text"
                className="p-2 border rounded-md border-slate-600"
                name="articleLink"
                value={formik.values.articleLink}
                onChange={handleCustomChange}
              />
              {formik.errors.articleLink && formik.touched.articleTitle ? (
                <span className="text-xs text-red-500">
                  {formik.errors.articleLink}
                </span>
              ) : null}
            </div>
          </div>
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
            <div className="flex flex-col justify-center gap-6">
              {videoType}
              {articleType}
            </div>
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
                  {imageFile ? (
                    <span
                      className="w-24 h-24 rounded-md"
                      onClick={() => {
                        imageInputRef.current && imageInputRef?.current?.click()
                      }}
                    >
                      <PreviewImage file={imageFile} />
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
                    <Label htmlFor="">Title</Label>
                    <input
                      type="text"
                      className="p-2 border rounded-md border-slate-600"
                      name="title"
                      value={formik.values.title}
                      onChange={handleCustomChange}
                    />
                    {formik.errors.title && formik.touched.title ? (
                      <span className="text-xs text-red-500">
                        {formik.errors.title}
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

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#818BF5] text-xl font-semibold">
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
                      formik.setFieldValue('contentType', content.payloadValue)
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
