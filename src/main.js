import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyCAPL9IwRzA6IvbWYfeeBy-xAw8T7-wZtQ',
  authDomain: 'trainingvue-d966f.firebaseapp.com',
  databaseURL: 'https://trainingvue-d966f.firebaseio.com',
  projectId: 'trainingvue-d966f',
  storageBucket: 'trainingvue-d966f.appspot.com',
  messagingSenderId: '1002722709314',
  appId: '1:1002722709314:web:225f80bc5d99216db1c2db',
  measurementId: 'G-JRJWWFMHSK'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
