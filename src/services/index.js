import axios from 'axios'
import store from '@store'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const { token } = store.getState().login
  const headers = {
    ...config.headers,
    Authorization: token && `Bearer ${token}`,
  }
  return { ...config, headers }
})

export default api
