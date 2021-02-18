import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBhArewFGiygi4RcpGXwz2qVPlvL4vXQKI",
  authDomain: "vue-auth-yt-92b18.firebaseapp.com",
  projectId: "vue-auth-yt-92b18",
  storageBucket: "vue-auth-yt-92b18.appspot.com",
  messagingSenderId: "117804613916",
  appId: "1:117804613916:web:a42da14d028ec29321fad9"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
