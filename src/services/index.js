import axios from 'axios'
import store from '@store'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth
  const headers = { ...config.headers, Authorization: token && `Bearer ${token}` }
  return { ...config, headers }
})

export default api
