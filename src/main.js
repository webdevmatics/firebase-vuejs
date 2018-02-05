// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyDlFQmbshbz32CxUn8mFHfGm7opw5UhUZg",
  authDomain: "tinkering-6f440.firebaseapp.com",
  databaseURL: "https://tinkering-6f440.firebaseio.com",
  projectId: "tinkering-6f440",
  storageBucket: "tinkering-6f440.appspot.com",
  messagingSenderId: "966393702974"
};

firebase.initializeApp(config);

window.firebase=firebase;

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});

