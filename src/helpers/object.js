export const encodeQueryData = (obj) => {
  if (!Object.keys(obj).length) return ''
  return `?${Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')}`
}

export const cleanFalsy = (obj) => {
  return Object.entries(obj).reduce((prev, [key, value]) => {
    return (value || value === false) ? { ...prev, [key]: value } : prev
  }, {})
}
