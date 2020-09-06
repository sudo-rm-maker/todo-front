import Axios from 'axios'

Axios.defaults.withCredentials = true

const axiosConfig = {
  responseType: 'json',
  timeout: 10000
}

const AxiosInst = Axios.create(axiosConfig)
const domain = 'http://localhost:8888'

const apiPaths = {
  loginPath: '/spi/v1/login',
  logoutPath: '/api/v1/logout',
  authPath: '/api/v1/auth'
}
export {
  AxiosInst, apiPaths, domain
}
