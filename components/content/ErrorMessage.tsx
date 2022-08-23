import { Formik, FormikProps } from 'formik'
import React from 'react'

interface MyValues {
  image: string
  name: string
  description: string
  contentType: string
  videoLink: string
  article: string
}

const ErrorMessage = (props:any) => {
  const {formik} = props;
  return <span>{formik.to}</span>
}

export default ErrorMessage
