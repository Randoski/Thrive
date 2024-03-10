import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/global.scss'
import './index.css'
import BaseCard from './components/Base/BaseCard.vue'
import BaseBtn from './components/Base/BaseBtn.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueApexCharts from "vue3-apexcharts";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {

  apiKey: "AIzaSyBc6MNFQFpQ3L5N15SVcy0zBgxU8C_sdqs",

  authDomain: "use-later-1a510.firebaseapp.com",

  projectId: "use-later-1a510",

  storageBucket: "use-later-1a510.appspot.com",

  messagingSenderId: "240868046004",

  appId: "1:240868046004:web:6ed205250c90110fc5d3e1"

};


const app = createApp(App);

initializeApp(firebaseConfig); 

const db = getFirestore();

app.component('BaseCard', BaseCard)
   .component('BaseBtn', BaseBtn)
   .use(PerfectScrollbar)
   .use(VueApexCharts)
   .use(store)
   .use(router)
   .provide('db', db) // Provide Firestore instance to Vue app
   .mount('#app')
