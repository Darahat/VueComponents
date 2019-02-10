import axios from 'axios'
import store from '@/store/'

export default () => {
  return axios.create({
    baseURL: `https://vast-eyrie-93561.herokuapp.com/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
