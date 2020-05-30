
import Axios from 'axios'
export function axiosInstall (Vue) {
  Axios.interceptors.response.use(response => {
    if (response.data.success === true) {
      return response.data
    }
    return null
  }, () => {
    return null
  })
  Vue.prototype.Axios = Axios
}
