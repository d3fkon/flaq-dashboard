import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://api.flaq.club:3030/api/'
})

export async function getRequest(URL: string) {
  return await httpRequest.get(`/${URL}`);
}

export async function postRequest(URL: string, payload:any){
  return await httpRequest.post(`/${URL}`, payload);
}

export async function patchRequest(URL:string, payload:any) {
  return await httpRequest.patch(`/${URL}`, payload);
}

export async function putRequest(URL:string, payload:any) {
  return await httpRequest.put(`/${URL}`, payload);
}

export async function deleteRequest(URL:string) {
  return await httpRequest.delete(`/${URL}`);
}