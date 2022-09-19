import axios from 'axios'
let token
if (typeof window !== 'undefined') {
  // Perform localStorage action
  token = localStorage.getItem('accessToken')
}
const httpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'x-access-token': token ? token : '',
  },
})

export async function getRequest(URL: string) {
  return await httpRequest.get(`${URL}`)
}

export async function postRequest(URL: string, payload: any) {
  return await httpRequest.post(`${URL}`, payload)
}

export async function patchRequest(URL: string, payload: any) {
  return await httpRequest.patch(`${URL}`, payload)
}

export async function putRequest(URL: string, payload: any) {
  return await httpRequest.put(`${URL}`, payload)
}

export async function deleteRequest(URL: string) {
  return await httpRequest.delete(`${URL}`)
}
