import axios, { AxiosError } from 'axios'

import { showToast } from '@/utils'

declare module 'axios' {
  export interface AxiosRequestConfig {
    showToast?: boolean
  }
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  showToast: true,
})

api.interceptors.request.use(
  (response) => response,
  (error: AxiosError) => {
    // TODO: This may need to be revised
    if (error.config?.showToast) {
      showToast({
        message: `Error: ${error.response?.status}`,
      })
    }
    return Promise.reject(error)
  }
)
