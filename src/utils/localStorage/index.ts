const APP_KEY = 'WONGAMES'

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export const setStorageItem = (key: string, value: string[]) => {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)

  window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}