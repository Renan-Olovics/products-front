import { ReactNode } from 'react'

import { toast as toastify } from 'react-toastify'

type LightDark = 'light' | 'dark'
type ToastType = 'warning' | 'error' | 'success' | 'info'
type Theme = 'colored' | LightDark

type ToastProps = {
  message: ReactNode
  theme?: Theme
  type?: ToastType
}

export const showToast = ({ message, theme, type = 'success' }: ToastProps) => {
  const html = document.querySelector('html')
  const currentTheme = html?.getAttribute('data-mode')

  const themes = ({ dark: 'light', light: 'dark' }[currentTheme ?? 'dark'] || 'dark') as LightDark

  toastify[type](message, { theme: theme || themes })
}

type PromiseToast = {
  promise: Promise<unknown>
  type?: ToastType
  theme?: Theme
  error: string
  pending: string
  success: string
}

export const promiseToast = async ({ promise, theme, error, pending, success }: PromiseToast) => {
  const html = document.querySelector('html')
  const currentTheme = html?.getAttribute('data-mode')

  const themes = ({ dark: 'light', light: 'dark' }[currentTheme ?? 'dark'] || 'dark') as LightDark

  return toastify.promise(promise, { error, pending, success }, { theme: theme || themes })
}
