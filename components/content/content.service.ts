import axios from 'axios'
import { postRequest } from '../../services/api.service'

/**
 * Api call for creating campaigns
 * @param payload
 */
export const createContent = async (payload: any) => {
  try {
    const response = await postRequest('creators/campaign/create', payload)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Api call for getting Signed Url
 * @param file
 * @returns
 */
export const getSignedUrl = async (file: any) => {
  try {
    const body = {
      fileName: file.name.split(`.`)[0],
      fileExtention: file.name.split('.').pop(),
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/utils/aws/file-upload`,
      body,
    )
    return response.status === 201 && response.data
  } catch (error) {
    console.log(error)
  }
}

/**
 * Api call for uploading docs/images in s3
 * @param url
 * @param inputFormData
 * @returns
 */
export const uploadDoc = async (url: string, inputFormData: any) => {
  try {
    const response = await axios.put(url, inputFormData)
    return response.status === 200 ? true : false
  } catch (error) {
    console.log(error)
  }
}
