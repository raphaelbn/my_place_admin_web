import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyAb1wdhDzgGAh19CwTmKXDBbJR-VwDJqYs",
  authDomain: "my-place-f144b.firebaseapp.com",
  databaseURL: "https://my-place-f144b.firebaseio.com",
  projectId: "my-place-f144b",
  storageBucket: "my-place-f144b.appspot.com",
  messagingSenderId: "791571824394",
  appId: "1:791571824394:web:c1080ff8a4fc294dc144f3",
  measurementId: "G-MD2BBNPL59"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
