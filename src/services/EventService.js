import axios from 'axios'
import firebase from 'firebase'

const apiClient = axios.create({
  //https://5eec62d45e298b0016b69b43.mockapi.io/api
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getData(colect) {
    return apiClient.get(`/${colect}`)
  },
  getDataFilter(colect, field, text) {
    return apiClient.get(`/${colect}?${field}_like=${text}`)
  },
  addNew(colect, payload) {
    return apiClient.post(`/${colect}`, payload)
  },
  deleteByID(colect, id) {
    return apiClient.delete(`/${colect}/${id}`)
  },
  getInfo() {
    new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(userInfo => {
        if (userInfo) {
          resolve(userInfo)
        } else {
          reject()
        }
      })
    })
  },
  loginWIthPassword({ email, password }) {
    new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => {
          resolve(result)
        })
        .catch(() => {
          reject(new Error('Wrong Email/Password'))
        })
    })
  }
}
