/* eslint-disable @typescript-eslint/no-explicit-any */
import request from './index'

export type IParam = {
  data?: any
  headers?: any
}

export async function getBlogs(params?: IParam) {
  return request(
    '/blogs',
    {
      method: 'GET',
      data: (params && params.data) || {}
    },
    params && params?.headers
  )
}

export async function getBlogById(id: number, params?: IParam) {
  return request(
    `/blogs/${id}`,
    {
      method: 'GET',
      data: (params && params.data) || {}
    },
    params && params?.headers
  )
}
