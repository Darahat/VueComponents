import api from '@/services/api'
export default{
  register (credentials) {
    return api().post('register', credentials)
  },
  login (credentials) {
      console.log(credentials)
    return api().post('login', credentials)
  }
}
